"use client";
import { useState, FormEvent, ChangeEvent } from "react";
import { enroll } from "../../api/user-service";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const states = [
  { name: "Alabama", abbr: "AL" },
  { name: "Alaska", abbr: "AK" },
  { name: "Arizona", abbr: "AZ" },
  { name: "Arkansas", abbr: "AR" },
  { name: "California", abbr: "CA" },
  { name: "Colorado", abbr: "CO" },
  { name: "Connecticut", abbr: "CT" },
  { name: "Delaware", abbr: "DE" },
  { name: "Florida", abbr: "FL" },
  { name: "Georgia", abbr: "GA" },
  { name: "Hawaii", abbr: "HI" },
  { name: "Idaho", abbr: "ID" },
  { name: "Illinois", abbr: "IL" },
  { name: "Indiana", abbr: "IN" },
  { name: "Iowa", abbr: "IA" },
  { name: "Kansas", abbr: "KS" },
  { name: "Kentucky", abbr: "KY" },
  { name: "Louisiana", abbr: "LA" },
  { name: "Maine", abbr: "ME" },
  { name: "Maryland", abbr: "MD" },
  { name: "Massachusetts", abbr: "MA" },
  { name: "Michigan", abbr: "MI" },
  { name: "Minnesota", abbr: "MN" },
  { name: "Mississippi", abbr: "MS" },
  { name: "Missouri", abbr: "MO" },
  { name: "Montana", abbr: "MT" },
  { name: "Nebraska", abbr: "NE" },
  { name: "Nevada", abbr: "NV" },
  { name: "New Hampshire", abbr: "NH" },
  { name: "New Jersey", abbr: "NJ" },
  { name: "New Mexico", abbr: "NM" },
  { name: "New York", abbr: "NY" },
  { name: "North Carolina", abbr: "NC" },
  { name: "North Dakota", abbr: "ND" },
  { name: "Ohio", abbr: "OH" },
  { name: "Oklahoma", abbr: "OK" },
  { name: "Oregon", abbr: "OR" },
  { name: "Pennsylvania", abbr: "PA" },
  { name: "Rhode Island", abbr: "RI" },
  { name: "South Carolina", abbr: "SC" },
  { name: "South Dakota", abbr: "SD" },
  { name: "Tennessee", abbr: "TN" },
  { name: "Texas", abbr: "TX" },
  { name: "Utah", abbr: "UT" },
  { name: "Vermont", abbr: "VT" },
  { name: "Virginia", abbr: "VA" },
  { name: "Washington", abbr: "WA" },
  { name: "West Virginia", abbr: "WV" },
  { name: "Wisconsin", abbr: "WI" },
  { name: "Wyoming", abbr: "WY" },
];
export default function EnrollForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    email: "",
    streetAddress: "",
    city: "",
    state: "",
    zip: "",
  });
  const { toast } = useToast();
  const router = useRouter();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSelectState = (state: string) => {
    console.log(state);
    setFormData((prevState) => ({
      ...prevState,
      ["state"]: state,
    }));
  };

  const onChangeLetters = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // Use regular expression to check if the value contains only letters and spaces
    const onlyLettersAndSpaces = /^[A-Za-z\s]+$/;
    if (onlyLettersAndSpaces.test(value) || value === "") {
      // Update the state only if the value is empty or contains only letters and spaces
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const onChangeZip = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // Use regular expression to remove non-numeric characters
    const numericValue = value.replace(/\D/g, ""); // Remove non-numeric characters
    // Update the state with the cleaned numeric value
    setFormData((prevState) => ({
      ...prevState,
      [name]: numericValue,
    }));
  };

  const isStrongPassword = (password: string) => {
    // Check if the password is at least 8 characters long
    if (password.length < 8) {
      return false;
    }

    // Check if the password contains at least one capital letter
    if (!/[A-Z]/.test(password)) {
      return false;
    }

    // Check if the password contains at least 3 numbers
    const numCount = (password.match(/\d/g) || []).length;
    if (numCount < 3) {
      return false;
    }

    // Check if the password contains at least one special character
    const specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    if (!specialCharRegex.test(password)) {
      return false;
    }

    return true;
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (formData.password !== formData.confirmPassword) {
        throw new Error("Passwords do not match!");
      }

      if (!isStrongPassword(formData.password)) {
        throw new Error(
          "Password must be at least 8 characters long, contain 3 numbers, include a special character, and have at least one capital letter."
        );
      }

      const response = await enroll(formData);

      if (response.username) {
        throw new Error("Username already exists.");
      }
      if (response.address) {
        throw new Error("Invalid address provided.");
      }
      if (response.email) {
        throw new Error("Email already registered.");
      }
      if (response.error) {
        throw new Error(response.error);
      }
      if (response.message) {
        toast({
          title: "Success! User has been enrolled.",
          description: "Valid information!",
          variant: "constructive",
        });
        router.push('/login')
      }
    } catch (err) {
      toast({
        title: "Error! Enrollment unsuccessful.",
        description: "Please review the form: " + err,
        variant: "destructive",
      });
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <Toaster />
      <div className="border-b border-gray-900/10 pb-12 px-10">
        <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-4">
            <Label
              className="block text-sm font-medium leading-6 text-gray-900"
              htmlFor="username"
            >
              Username
            </Label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 sm:max-w-md">
                <Input
                  autoComplete="username"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  id="username"
                  name="username"
                  value={formData.username}
                  type="text"
                  onChange={onChange}
                  required
                />
              </div>
            </div>
          </div>

          <div className="sm:col-span-3">
            <Label
              className="block text-sm font-medium leading-6 text-gray-900"
              htmlFor="password"
            >
              Password
            </Label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 sm:max-w-md">
                <Input
                  autoComplete="password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  id="password"
                  name="password"
                  value={formData.password}
                  type="password"
                  onChange={onChange}
                  required
                />
              </div>
              {formData.password && !isStrongPassword(formData.password) && (
                <p className="mt-2 text-pink-600 text-sm">
                  Must be at least 8 characters long, contain 3 numbers, include
                  a special character and one capital letter.
                </p>
              )}
            </div>
          </div>

          <div className="sm:col-span-3">
            <Label
              className="block text-sm font-medium leading-6 text-gray-900"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </Label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 sm:max-w-md">
                <Input
                  autoComplete="confirmPassword"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  type="password"
                  onChange={onChange}
                  required
                />
              </div>
              {formData.password !== formData.confirmPassword && (
                <p className="mt-2 text-pink-600 text-sm">
                  Passwords do not match.
                </p>
              )}
            </div>
          </div>
        </div>

        <h2 className="text-base font-semibold leading-7 text-gray-900 mt-6">
          Personal Information
        </h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          Use a permanent address where you can receive mail.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <Label
              className="block text-sm font-medium leading-6 text-gray-900"
              htmlFor="firstName"
            >
              First name
            </Label>
            <div className="mt-2">
              <Input
                autoComplete="given-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                type="text"
                pattern="[A-Za-z]+"
                onChange={onChangeLetters}
                required
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <Label
              className="block text-sm font-medium leading-6 text-gray-900"
              htmlFor="lastName"
            >
              Last name
            </Label>
            <div className="mt-2">
              <Input
                autoComplete="family-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                type="text"
                onChange={onChangeLetters}
                required
              />
            </div>
          </div>
          <div className="sm:col-span-4">
            <Label
              className="block text-sm font-medium leading-6 text-gray-900"
              htmlFor="email"
            >
              Email address
            </Label>
            <div className="mt-2">
              <Input
                autoComplete="email"
                className="peer block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                id="email"
                name="email"
                value={formData.email}
                type="email"
                onChange={onChange}
                required
              />

              {formData.email && (
                <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                  Please provide a valid email address.
                </p>
              )}
            </div>
          </div>
          <div className="col-span-full">
            <Label
              className="block text-sm font-medium leading-6 text-gray-900"
              htmlFor="streetAddress"
            >
              Street address
            </Label>
            <div className="mt-2">
              <Input
                autoComplete="street-address"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                id="streetAddress"
                name="streetAddress"
                value={formData.streetAddress}
                type="text"
                onChange={onChange}
                required
              />
            </div>
          </div>
          <div className="sm:col-span-2 sm:col-start-1">
            <Label
              className="block text-sm font-medium leading-6 text-gray-900"
              htmlFor="city"
            >
              City
            </Label>
            <div className="mt-2">
              <Input
                autoComplete="address-level2"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                id="city"
                name="city"
                value={formData.city}
                type="text"
                onChange={onChangeLetters}
                required
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <Label
              className="block text-sm font-medium leading-6 text-gray-900"
              htmlFor="state"
            >
              State
            </Label>
            <div className="mt-2">
              <Select name="state" onValueChange={onSelectState} required>
                <SelectTrigger className="rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:leading-6">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>State</SelectLabel>
                    {states.map((state) => (
                      <SelectItem key={state.name} value={state.name}>
                        {state.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="sm:col-span-2">
            <Label
              className="block text-sm font-medium leading-6 text-gray-900"
              htmlFor="zip"
            >
              ZIP / Postal code
            </Label>
            <div className="mt-2">
              <Input
                autoComplete="postal-code"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  sm:text-sm sm:leading-6"
                id="zip"
                name="zip"
                value={formData.zip}
                type="text"
                onChange={onChangeZip}
                maxLength={5}
                required
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 mt-5 gap-4">
          <button
            className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none mt-10"
            type="submit"
          >
            Enroll
          </button>
        </div>
      </div>
    </form>
  );
}

import Accounts from "./accounts";

export default function AccountContainer() {
  return (
    <div className="bg-white relative bg-gradient-to-bl from-blue-100 via-transparent lg:h-full">
      <div className="container justify-center max-w-screen-xl px-4 py-8 mx-auto">
        <div className="lg:px-8 lg:py-8">
          <div className="grid grid-rows-1 justify-center">
  
              <h1 className="pb-8 text-4xl font-extrabold tracking-tight bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent text-center">
                Select an account
              </h1>
              <Accounts />
          </div>
        </div>
      </div>
    </div>
  );
}

import EnrollCard from './enroll-card'
export default function Enroll() {
    return (
        <div className="bg-white relative bg-gradient-to-bl from-blue-100 via-transparent fixed lg:h-screen">
        <div className="container justify-center max-w-screen-xl px-4 py-8 mx-auto">
          <div className="lg:px-20 lg:py-20">
            <EnrollCard />
          </div>
        </div>
      </div>
    );
  }
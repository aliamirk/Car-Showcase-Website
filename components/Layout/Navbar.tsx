import Link from "next/link"
import Image from "next/image"
import CustomButton from "../UI/CustomButton"


const Navbar = () => {
  return (
    
    <header className="w-full absolute z-10">
        {/* Navbar Container */}
        <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4  ">

            {/* Nav Elements */}
            <Link href="/" className="flex justify-center items-center">

                {/* Logo */}
                <Image 
                    src="/logo.svg"
                    alt="Car Hub Logo"
                    width={118}
                    height={18}
                    className="object-contain"
                />
            </Link>


            {/* Sign-In Button */}
            <CustomButton
                title="Sign In"
                type="button" 
                containerStyles="text-primary-blue border-2 border-primary-blue rounded-full bg-white min-w-[130px] hover:text-white hover:bg-primary-blue"
            />

        </nav>
    </header>
  )
}

export default Navbar
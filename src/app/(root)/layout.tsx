<<<<<<< HEAD
import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import Image from "next/image";
import { redirect } from "next/navigation";
=======
import Sidebar from "@/components/Sidebar";
>>>>>>> 14220eb (add functionality in sidebar)

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

<<<<<<< HEAD
    const loggedIn = await getLoggedInUser();

    if (!loggedIn) return redirect('/sign-in')

    return (
<<<<<<< HEAD
=======
    const loggedIn = { firstName: "kamal", lastName: "sharma" };

    return (
>>>>>>> 14220eb (add functionality in sidebar)
        <main className="flex h-screen w-full font-inter">

            <Sidebar user={loggedIn} />

<<<<<<< HEAD
            <div className="flex size-full flex-col">
                <div className="root-layout">
                    <Image src={"/icons/logo.svg"} alt="menu" width={30} height={30} />
                    <div className="">
                        <MobileNav user={loggedIn} />
                    </div>
                </div>
                {children}
            </div>

=======
        <main>
=======
>>>>>>> 14220eb (add functionality in sidebar)
            {children}
>>>>>>> bfbc5cb (second commit start create functionality)
        </main>
    );
}
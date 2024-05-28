import BlogNavbar from "@/components/blogNavbar";
import type * as next from "next";


export const metadata: next.Metadata = {
    title: "Blogs ",
    description: "TrustPilot",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            {/* <BlogNavbar /> */}
            {children}
        </div>

    )
}
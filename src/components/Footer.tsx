import { quickLinksData } from "../assets/helper";

const Footer = () => {
    return <section className="bg-[#fbf4e4]">
        <div className="px-6 md:px-24 py-10 flex flex-col md:flex-row justify-between">
            <div className="md:w-4/12">
                <img src="/images/logo.png" alt="logo-img" className="w-20 py-4" />
                <p className="text-gray-500/80">We deliver fresh groceries and snacks straight to your door. Trusted by thousands, we aim to make your shopping experience simple and affordable.</p>
            </div>
            <div className="flex flex-col md:flex-row md:gap-20">
                <div className="flex flex-col md:flex-row md:gap-20">
                    {quickLinksData.map((section, index) => (
                        <div key={index} className="mt-6 md:mt-0">
                            <h1 className="mb-3 md:mb-6 font-semibold text-[#364152]">{section.title}</h1>
                            <ul className="text-gray-500/90 text-sm md:text-md">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <a href={link.href}>{link.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <div className="px-6 md:px-24">
            <p className="border-t-1 border-gray-500/40 text-center py-3 md:py-4 text-[#364152] text-sm md:text-md">Copyright 2025 © GreatStack.dev All Right Reserved.</p>
        </div>
    </section>
};

export default Footer;
function Cart(props) {
    return (
        <>
            <div className="fixed inset-0 bg-indigo-300/50 flex items-center justify-center" onClick={() => props.setSchow(!props.schow)}>
                <div className="bg-gray-200 p-4 rounded-lg shadow-xl w-200 px-10 bg-gradient-to-r from-[#8C85FF]  to-[#261559] text-white" onClick={() => props.setSchow(!props.schow)}>
                    <h1 className="text-2xl font-extrabold text-center ">Informition About Hostinger</h1>
                    <p className="font-serif italic text-lg mt-8">English:Hostinger is a web hosting company from Lithuania, founded in 2004.
                        It offers services like shared hosting, cloud hosting, VPS, WordPress hosting, and domain registration.
                        Hostinger also owns several brands: 000Webhost (free hosting), Hosting24 (US/UK), Niagahoster (Indonesia),
                        Weblink (Brazil), and Zyro (website builder). The company is known for low prices, good speed, and ease of use, but renewal costs can be higher.
                        Deutsch: Hostinger ist ein Webhosting-Unternehmen aus Litauen, gegründet im Jahr 2004.
                        Es bietet Dienste wie Shared Hosting, Cloud Hosting, VPS, WordPress-Hosting und Domainregistrierung an.
                        Hostinger besitzt außerdem mehrere Marken: 000Webhost (kostenloses Hosting), Hosting24 (USA/UK), Niagahoster (Indonesien),
                        Weblink (Brasilien) und Zyro (Website-Builder). Das Unternehmen ist bekannt für niedrige Preise, gute Geschwindigkeit und
                        einfache Bedienung, aber die Verlängerungskosten können höher sein.</p>
                    <div className="flex items-center justify-center mt-8">
                        <button className="px-30 py-3 rounded-lg text-white font-bold 
                             bg-gradient-to-r from-[#8C85FF] to-[#261559] 
                             hover:from-[#261559] hover:to-indigo-500 transition duration-360" onClick={() => props.setSchow(false)}>  ✕ Close </button> 
                    </div>
                </div>
            </div>
        </>
    );
}
export default Cart;
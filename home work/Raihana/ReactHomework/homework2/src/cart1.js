import { IoLogoDribbble } from "react-icons/io5";
import { CiDatabase } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { CiCircleCheck } from "react-icons/ci";

function Cart1() {
    return (
        <>
            <div className="w-[22%] p-[2px] rounded-[20px] h-auto">
                <h1 className="text-white text-xl text-center mt-2 font-bold ">BESTSELLER</h1>
                <div className="border-2 border-[#D5DFFF] mt-3 rounded-[20px] bg-white p-4 h-[94vh]">
                    <p className="p-1 bg-[#D5DFFF] w-[100px] rounded-full ml-auto text-center font-bold">75% Rabatt</p>
                    <p className="font-bold text-[18px]">Premium</p>
                    <p className="leading-10">Alles, was Sie für den Einstieg benötigen</p>
                    <div>
                        <span className="font-bold text-[28px]">2,99€ </span>
                        <span>/Mon.</span>
                        <p className="font-bold text-[#673DE6] text-xl leading-10">+2 Monate GRATIS</p>
                        <button className="border border-[#673DE6] w-full py-3 hover:bg-[#E2DBFC] rounded-[10px] font-bold text-[18px] text-[#673DE6] mt-4 cursor-pointer">Plan wählen</button>
                    </div>
                    <div className="border-b border-[#D5DFFF] mb-4">
                        <p className="py-4 text-[#7A7D89] ">Erhalten Sie 48 Monate für 143,52 € (regulärer Preis 575,52 €). Verlängerungspreis: 9,99 €/Mon.</p>
                    </div>
                    <div className="flex justfy-center items-center gap-2 py-1">
                        <IoLogoDribbble className="text-[#888FAA] text-[20px]" /><p>Erstellen Sie bis zu 25 Websites</p>
                    </div>
                    <div className="flex justfy-center items-center gap-2 py-2">
                        <CiDatabase className="text-[#888FAA] text-[20px]" /><p>25 GB Speicher für Ihre Dateien (SSD)</p>
                    </div>
                    <div className="flex justfy-center items-center gap-2 py-2">
                        <CiMail className="text-[#888FAA] text-[20px]" /><p className="text-sm leading-5 underline decoration-dashed decoration-[#888FAA] underline-offset-4">2 Postfächer pro Website – 1 Jahr lang <br></br> kostenlos</p>
                    </div>
                    <div className=" my-4">
                        <p className="font-bold text-[18px]">Premium-Vorteile:</p>
                    </div>
                    <div className="flex justfy-center items-center gap-2">
                        <CiCircleCheck className="text-[#00B090] text-[18px]" />  <p className="text-sm leading-5 underline decoration-dashed decoration-[#888FAA] underline-offset-4 text-[15px]">Kostenlose Domain für 1 Jahr</p>
                    </div>
                    <div className="flex justfy-center items-center gap-2 py-1">
                        <CiCircleCheck className="text-[#00B090] text-[18px]" /><p className="text-[15px]">Schützen Sie jede Website mit kostenlosem SSL</p>
                    </div>
                    <div className="flex justfy-center items-center gap-2 py-1">
                        <CiCircleCheck className="text-[#00B090] text-[18px]" /><p className="text-[15px]">Erhalten Sie wöchentliche automatische <br></br> Backups zur einfachen <br></br> Datenwiederherstellung</p>
                    </div>
                    <div className="flex justfy-center items-center gap-2 py-1">
                        <CiCircleCheck className="text-[#00B090] text-[18px]" />  <p className="text-sm leading-5 underline decoration-dashed decoration-[#888FAA] underline-offset-4 text-[15px]">E-Mail-Marketing</p> <p className="bg-[#EBE4FF] rounded-[10px] p-1 px-2 text-[14px] font-bold text-[#673DE6]">NEU</p>
                    </div>
                    <div className="flex justfy-center items-center gap-2 py-1">
                        <CiCircleCheck className="text-[#00B090] text-[18px]" />  <p className="text-[15px]">Übertragen Sie Ihre Website kostenlos und <br></br> ohne Ausfallzeiten</p>
                    </div>
                    <div className="flex justfy-center items-center gap-2 py-1">
                        <CiCircleCheck className="text-[#00B090] text-[18px]" /> <p className="text-[15px]"> Übertragen Sie Ihre Website kostenlos und<br></br> ohne Ausfallzeiten</p>
                    </div>
                    <div className="flex justfy-center items-center gap-2 py-1">
                        <CiCircleCheck className="text-[#00B090] text-[18px]" /> <p className="text-[15px]"> Genießen Sie die Wartung Ihrer WordPress- <br></br>Websites</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Cart1;
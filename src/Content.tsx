import { getDownloadURL, ref } from "firebase/storage";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { storage } from "./firebase/firebase";
import { useEffect, useState } from "react";
import { Dialog, DialogTitle } from "@mui/material";

const Content = () => {
    const [pdf, setPdf] = useState<string>();
    const [image, setImage] = useState<string>();
    const [openDialog, setOpenDialog] = useState(false)
    const getPDF = () => {
        const pdfRef = ref(storage, `Životopis.pdf`);
        getDownloadURL(pdfRef).then(pdf => setPdf(pdf))
        setOpenDialog(true)
    }
    useEffect(() => {
        const imageRef = ref(storage, `pdf.png`);
        getDownloadURL(imageRef).then(image => setImage(image))
    }, [])

    return <div className="content">
        <h1>Patrik Macukić</h1>
        <div className="projekt">
            <h1>Bela Blok</h1>
            <p>Mobilna aplikacija koja služi za praćenje rezultata kartajući igru zvanu Belot.</p>
            <p>Aplikacija je napisana u programskom jeziku Dart koristeći radni okvir Flutter.</p>
            <p>Ovo je moj osobni projekt.</p>
        </div>
        <div className="projekt">
            <h1>Map Tasker</h1>
            <p>Aplikacija kojoj je cilj osigurati bolje upravljanje spasilačkih akcija u slučaju elementarnih nepogoda.</p>
            <p>Aplikacija je napisana u React Typescriptu i Expressu.</p>
            <p>Ovo je bio grupni rad od 7 ljudi u sklopu kolegija Programsko inženjerstvo.</p>
            <p>Ja sam bio zadužen za izradu frontenda.</p>
        </div>
        <div className="projekt">
            <h1>Životopis</h1>
            <img src={image} alt="" onClick={() => getPDF()} />
        </div>
        <div className="icon-container">
            <a href="https://github.com/dux2000">
                <AiFillGithub className="icon" />
            </a>
            <a href="https://www.linkedin.com/in/patrik-macuki%C4%87-864144231/">
                <AiFillLinkedin className="icon" />
            </a>
        </div>
        <Dialog open={openDialog} onClose={() => setOpenDialog(!openDialog)}>
            <DialogTitle>Životopis</DialogTitle>
            <iframe src={pdf} width="550px" height="500px"></iframe>
        </Dialog>
    </div>
}

export default Content;
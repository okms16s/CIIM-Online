import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useLanguage } from "../../context/LanguageProvider";
import serverURL from "../../utils/url";

function Upload() {
    const [pdf, setPdf] = useState("PDF Load");
    const [img, setImg] = useState("IMAGE Load");
    const [title, setTitle] = useState("");
    const [pdffile, setpdffile] = useState();
    const [imgfile, setimgfile] = useState();

    const imgOver = (e) => {
        e.preventDefault();
    };

    const imgDrop = async (e) => {
        e.preventDefault();
        const files = e.dataTransfer.files;
        var names = "";
        for (var i = 0; i < files.length; i++) {
            if (names == "") names += files[i].name;
            else names += ("・" + files[i].name);
        }
        setimgfile(files);
        setImg(names);
    };

    const pdfOver = (e) => {
        e.preventDefault();
    };

    const pdfDrop = async (e) => {
        e.preventDefault();
        const files = e.dataTransfer.files;
        var names = "";
        for (var i = 0; i < files.length; i++) {
            if (names == "") names += files[i].name;
            else names += ("・" + files[i].name);
        }
        setpdffile(files);
        setPdf(names);
    };

    const fileUpload =  async () => {
        const formData = new FormData();

        formData.append('PDF', pdffile[0]);
        formData.append('IMAGE', imgfile[0]);
        await axios.post(serverURL + "/upload", formData, {
            headers: {
                "Content-Type": "multipart/form-data; encoding=utf-8",
            },
        })
            .then(async function (url) {
                var urls = '';
                urls = url.data;
                const data ={
                    title:title,
                    pdf:urls.split(", ")[0],
                    img:urls.split(", ")[1]
                }
                await fetch(serverURL+'/newdata', {
                    method:"POST",
                    headers:{
                        'Content-Type':'application/json'
                    },
                    body: JSON.stringify(data)
                })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    if(data == 2){
                        toast.success("Upload Success!");
                        setTitle("");
                        setPdf("PDF Load");
                        setImg("IMAGE Load");
                    }
                }).catch(error => {
                    console.error('There was a problem with the fetch operation:', error);
                });
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }

    return (
        <div className="container">
            <div className="cim-container bg-secondary mt-100">
                <div className="try-free-page">
                    <p className="fs-48 fontW-600 fontfamily-acumin text-primary fw-bold">PDF & IMAGE Upload
                    </p>
                    <div className="row mb-5 mt-5">
                        <div className="col-md-6 col-sm-12 p-0">
                            <p>
                                <span className="wpcf7-form-control-wrap" data-name="Bedrijfsnaam">
                                    <input size="40" value={title} onChange={(e) => setTitle(e.target.value)} className="tryinput wpcf7-form-control wpcf7-text wpcf7-validates-as-required w-100 mt-3 mb-3 wpcf7-not-valid" aria-required="true" aria-invalid="true" placeholder="Please enter data upload title." type="text" name="Bedrijfsnaam" aria-describedby="wpcf7-f160-o1-ve-Bedrijfsnaam" />
                                    <span className="wpcf7-not-valid-tip nodisplay" aria-hidden="true">Please fill out this field.</span>
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="w-50 bg-primary fs-30 text-white text-center fontW-acumin pt-185" onDrop={pdfDrop} onDragOver={pdfOver} style={{ height: "400px" }}>{pdf}</div>
                        <div className="w-50 bg-blue fs-30 text-white text-center fontW-acumin pt-185" onDrop={imgDrop} onDragOver={imgOver} style={{ height: "400px" }}>{img}</div>
                    </div>
                    <div className="w-100 tfp-submit text-center mt-5">
                        <p>
                            <input className=" sendbtn wpcf7-form-control has-spinner wpcf7-submit btn text-white bg-primary fs-18 fontW-400 w-25" type="submit" value="Upload" onClick={fileUpload} />
                            <span className="wpcf7-spinner"></span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Upload;
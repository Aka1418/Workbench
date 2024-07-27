var xmlReq = new XMLHttpRequest();

xmlReq.open("GET", "data.xml", true);

xmlReq.onreadystatechange = function(){
    let box = document.getElementById("box");

    let xmlResponse = xmlReq.responseXML;
    let students = xmlResponse.getElementsByTagName("student");

    for(let i = 0; i < students.length; i++){
        function a(id, index){
            return students[index].getElementsByTagName(id)[0].childNodes[0].nodeValue;
        }

        box.innerHTML += `
            <ul>
                <li><b>Name:</b> ${a("name", i)}</li>
                <li><b>Father Name:</b> ${a("fathername", i)}</li>
                <li><b>Age:</b> ${a("age", i)}</li>
                <li><b>Gender:</b> ${a("gender", i)}</li>
            </ul>
        `;

    }

    let notes = document.getElementById("notes");
    
    let note = xmlResponse.getElementsByTagName("note");

    for(let i = 0; i < note.length; i++){
        function a(id, index){
            return note[index].getElementsByTagName(id)[0].childNodes[0].nodeValue;
        }

        notes.innerHTML += `
            <ul>
                <li><b>To:</b> ${a("to", i)}</li>
                <li><b>From:</b> ${a("from", i)}</li>
                <li><b>Heading:</b> ${a("heading", i)}</li>
                <li><b>Message:</b> ${a("message", i)}</li>
            </ul>
        `;

    }
}





xmlReq.send();

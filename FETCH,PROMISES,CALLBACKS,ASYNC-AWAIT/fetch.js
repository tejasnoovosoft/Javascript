async function fetchEmployees() {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=8ebfc89bed00df7caa803aa665c84331')
    const employees = await response.json()
    console.log(employees)
}

fetchEmployees()
    .then(() => {
        console.log("Employee Fetch Successfully")
    })

async function postJSON(data) {
    try {
        const response = await fetch("https://example.com/profile", {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            }, body: JSON.stringify(data),
        });

        const result = await response;
        console.log("Success:", result);
    } catch (error) {
        console.error("Error:", error);
    }
}

const data = {username: "tejas"};
postJSON(data);

async function uploadFile() {
    const inputFile = document.getElementById('fileInput')
    const file = inputFile.files[0]
    try {
        if (file) {
            const formData = new FormData()
            formData.append('file', file)
            const response = await fetch('/url', {
                method: 'POST', body: formData
            })
            if (!response.ok) {
                console.error("Network response was not OK");
            }
            console.log("Uploaded Successfully")
        } else {
            console.log("No such file selected")
        }
    } catch (e) {
        console.error(`Error : ${e}`)
    }
}

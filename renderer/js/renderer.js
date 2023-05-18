//const information = document.getElementById('info')
//information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`


const form = document.getElementById("form_recipe");
if (form) {
    form.onsubmit = async function (e) {
        e.preventDefault();

        const formData = new FormData(form);

        let ingredients = formData.get("ingredients");
        if (ingredients.length <= 8){
            alertMessage('error', "Please input at least 8 characters!");
        return;
    }

        const response = await window.axios.openAI(formData.get("ingredients"));  
        document.getElementById("recipe_instructions").innerHTML = JSON.stringify(response.choices[0].text).replace(/\\n/g, '');
    };
}

function alertMessage(status, ingredients){
    window.Toastify.showToast({
        text: ingredients,
        duration: 5000,
        stopOnFocus: true,
        style:{
            background: status == "error" ? "red":"green",
            textAlign: "center",
            color: "white", 
            padding: "5px",
            marginTop: "2px"
        }
    });
}
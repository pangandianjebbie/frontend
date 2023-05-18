//const information = document.getElementById('info')
//information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`


const form = document.getElementById("form_recipe");
if (form) {
    form.onsubmit = async function (e) {
        e.preventDefault();

        const formData = new FormData(form);

        const response = await window.axios.openAI(formData.get("ingredients"));  
        document.getElementById("recipe_instructions").innerHTML = JSON.stringify(response.choices[0].text).replace(/\\n/g, '');
        //console.log();
 
    };
}
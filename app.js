
const input = document.querySelector('.form-control');

const picInfo = new pixabayInfo;

const ui = new pictureInterface



// picInfo.getUser('shoes').then((data)=>{
//     console.log(data)
//     console.log(data.userResponseData.hits[0])
// })


input.addEventListener('keyup', (e)=>{
    const userinput = e.target.value

    if (userinput !== '') {
        picInfo.getPicture(userinput).then((data)=>{
            console.log(data.userResponseData)

            if (data.userResponseData.totalhits === 0) {

            }else {
                ui.showPic(data.userResponseData);
            }
        
        })
    }
}); 
class pictureInterface {
    constructor() {
        this.productPic = document.querySelector('.output');
    }


    showPic(picData) {
        let str = ''
        picData.hits.forEach(hit=>{
            str+= 
                `
                <div class="col-md-3">
                        <div class="card bg-dark m-1" style="width: 17rem;">
                        <img src="${hit.largeImageURL}" class="card-img-top" alt="...">
                        <div class="card-body bg-dark">
                            <h5 class="card-title text-primary">${hit.tags}</h5>
                            <p class="card-text"><i class="fas fa-heart"></i> Likes : ${hit.likes}</p>
                            <p class="card-text"><i class="fas fa-user"></i> User : ${hit.user}</p>
                            <a href="${hit.pageURL}" class="btn btn-primary">Download <i class="fas fa-download"></i></a>
                        </div>
                    </div>
                </div>
                `
        })
        
        this.productPic.innerHTML = `
        <div class = "container d-flexh">
            <div class="row">
                ${str}
            </div>
        </div>
         `
    }

    // showPic(picData) {
    //     this.productPic.innerHTML = `
    //     <div class = "container d-flex">
    //         <div class="card bg-dark m-1" style="width: 18rem;">
    //             <img src="${picData.hits[0].largeImageURL}" class="card-img-top" alt="...">
    //             <div class="card-body">
    //                 <h5 class="card-title text-primary">${picData.hits[0].tags}</h5>
    //                 <p class="card-text"><i class="fas fa-heart"></i> Likes : ${picData.hits[0].likes}</p>
    //                 <p class="card-text"><i class="fas fa-user"></i> User : ${picData.hits[0].user}</p>
    //                 <a href="${picData.hits[0].pageURL}" class="btn btn-primary">Download <i class="fas fa-download"></i></a>
    //             </div>
    //         </div>

    //         <div class="card bg-dark m-1" style="width: 18rem;">
    //             <img src="${picData.hits[1].largeImageURL}" class="card-img-top" alt="...">
    //             <div class="card-body">
    //                 <h5 class="card-title text-primary">${picData.hits[1].tags}</h5>
    //                 <p class="card-text"><i class="fas fa-heart"></i> Likes : ${picData.hits[1].likes}</p>
    //                 <p class="card-text"><i class="fas fa-user"></i> User : ${picData.hits[1].user}</p>
    //                 <a href="${picData.hits[1].pageURL}" class="btn btn-primary">Download <i class="fas fa-download"></i></a>
    //             </div>
    //         </div>

    //         <div class="card bg-dark m-1" style="width: 18rem;">
    //             <img src="${picData.hits[2].largeImageURL}" class="card-img-top" alt="...">
    //             <div class="card-body">
    //                 <h5 class="card-title text-primary">${picData.hits[2].tags}</h5>
    //                 <p class="card-text"><i class="fas fa-heart"></i> Likes : ${picData.hits[2].likes}</p>
    //                 <p class="card-text"><i class="fas fa-user"></i> User : ${picData.hits[2].user}</p>
    //                 <a href="${picData.hits[2].pageURL}" class="btn btn-primary">Download <i class="fas fa-download"></i></a>
    //             </div>
    //         </div>

    //         <div class="card bg-dark m-1" style="width: 18rem;">
    //         <img src="${picData.hits[3].largeImageURL}" class="card-img-top" alt="...">
    //             <div class="card-body">
    //                 <h5 class="card-title text-primary">${picData.hits[3].tags}</h5>
    //                 <p class="card-text"><i class="fas fa-heart"></i> Likes : ${picData.hits[3].likes}</p>
    //                 <p class="card-text"><i class="fas fa-user"></i> User : ${picData.hits[3].user}</p>
    //                 <a href="${picData.hits[3].pageURL}" class="btn btn-primary">Download <i class="fas fa-download"></i></a>
    //             </div>
    //         </div>
    //     </div>

    //     <div class="container d-flex">
    //         <div class="card bg-dark m-1" style="width: 18rem;">
    //         <img src="${picData.hits[4].largeImageURL}" class="card-img-top" alt="...">
    //             <div class="card-body">
    //                 <h5 class="card-title text-primary">${picData.hits[4].tags}</h5>
    //                 <p class="card-text"><i class="fas fa-heart"></i> Likes : ${picData.hits[4].likes}</p>
    //                 <p class="card-text"><i class="fas fa-user"></i> User : ${picData.hits[4].user}</p>
    //                 <a href="${picData.hits[4].pageURL}" class="btn btn-primary">Download <i class="fas fa-download"></i></a>
    //             </div>
    //         </div>

    //         <div class="card bg-dark m-1" style="width: 18rem;">
    //         <img src="${picData.hits[5].largeImageURL}" class="card-img-top" alt="...">
    //             <div class="card-body">
    //                 <h5 class="card-title text-primary">${picData.hits[5].tags}</h5>
    //                 <p class="card-text"><i class="fas fa-heart"></i> Likes : ${picData.hits[5].likes}</p>
    //                 <p class="card-text"><i class="fas fa-user"></i> User : ${picData.hits[5].user}</p>
    //                 <a href="${picData.hits[5].pageURL}" class="btn btn-primary">Download <i class="fas fa-download"></i></a>
    //             </div>
    //         </div>

    //         <div class="card bg-dark m-1" style="width: 18rem;">
    //         <img src="${picData.hits[6].largeImageURL}" class="card-img-top" alt="...">
    //             <div class="card-body">
    //                 <h5 class="card-title text-primary">${picData.hits[6].tags}</h5>
    //                 <p class="card-text"><i class="fas fa-heart"></i> Likes : ${picData.hits[6].likes}</p>
    //                 <p class="card-text"><i class="fas fa-user"></i> User : ${picData.hits[6].user}</p>
    //                 <a href="${picData.hits[6].pageURL}" class="btn btn-primary">Download <i class="fas fa-download"></i></a>
    //             </div>
    //         </div>

    //         <div class="card bg-dark m-1" style="width: 18rem;">
    //         <img src="${picData.hits[7].largeImageURL}" class="card-img-top" alt="...">
    //         <div class="card-body">
    //             <h5 class="card-title text-primary">${picData.hits[7].tags}</h5>
    //             <p class="card-text"><i class="fas fa-heart"></i> Likes : ${picData.hits[7].likes}</p>
    //             <p class="card-text"><i class="fas fa-user"></i> User : ${picData.hits[7].user}</p>
    //             <a href="${picData.hits[7].pageURL}" class="btn btn-primary">Download <i class="fas fa-download"></i></a>
    //         </div>
    //         </div>
    //     </div>
    //      `
    // }
};
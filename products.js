class pixabayInfo {
    constructor () {
        this.client_secret = '29324255-1c1563b39e79c94d196ae9e38'
    }


    async getPicture (info) {
        const userResponse = await fetch(`https://pixabay.com/api/?key=${this.client_secret}&q=${info}`);
        
        const userResponseData = await userResponse.json();

        return {
            userResponseData
        }
    }
} 


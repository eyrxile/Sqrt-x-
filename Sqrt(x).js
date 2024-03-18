var mySqrt = function(x) {
    if(x === 0 || x === 1)
        return x;

    let start = 1;
    end = Math.floor(x / 2),
    ans = 0;

    while(start <= end){
        let mid = Math.floor((start + end) / 2);
        if(mid * mid === x)
            return mid
        
        if(mid * mid < x){
            start = mid + 1;
            ans = mid;
        } else{
            end = mid - 1;
        }
    }

    return ans;
};

//Example usage:
console.log(mySqrt(4));
console.log(mySqrt(8));
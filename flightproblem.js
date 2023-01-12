var jump = function(nums) {
    let n = nums.length-1
    var curr = 0;          
    var jumps = 0;  // jump of minimum airports.
    var maxReach = 0;    // it will be maximum reachebale point
    var newIndex;   // newindex for the indexing the plane.
    var index = 0;
		
    if(n == 1 ) {
        return 0;    // here i'm  simply checking the lenght of airoplanes  with 1 if matche then return 0
    }
    else if(nums[0]==0){
        return -1       // if not the return -1
    }
    
    while(index < nums.length) {
        if(index + nums[index] > maxReach) {
            newIndex = index;                   
            maxReach = index + nums[index];
        }                                       // using while loop for itereting the planes for reaching the destination 
                                               // with the minimum number of planes
        if(index >= (curr + nums[curr])) {
           jumps++;
           curr = newIndex;
        } 
        if(curr + nums[curr]>= nums.length -1) {
            jumps++;
            break;
        }       
        index++;
    }    
    return jumps;
};
const nums =  [2,1,2,3,1]

//  the worst time complexity will be o(n)
// and the space complexity will be o(1)

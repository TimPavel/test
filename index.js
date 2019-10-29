const matrix = [
    [0, 1, 1, 1],
    [0, 0, 1, 1],
    [0, 0, 0, 1],
    [1, 0, 0, 0],
    [1, 1, 0, 0],
    [1, 1, 0, 0]
];

let initH = 0, initW = 0;
let maxH = matrix.length;
let maxW = matrix[0].length;
let arrOfOnes = [];
let move = false;

function bloodhoundForLargestRegion(matrix, h = 0, w = 0, count = 0, max = 0) {

    if(w + 1 < maxW &&                                              //  6
        matrix[h][w + 1] === 1 &&
        arrOfOnes.indexOf(String(h)+String(w + 1)) === -1)
    {
        count++;
        move = true;
        arrOfOnes.push(`${h}${w + 1}`);
        return bloodhoundForLargestRegion(matrix, h, w + 1, count, max);
    }

    if(h + 1 < maxH && w + 1 < 4                                // 3
        && matrix[h + 1][w + 1] === 1 &&
        arrOfOnes.indexOf(String(h + 1)+String(w + 1)) === -1)
    {
        count++;
        move = true;
        arrOfOnes.push(`${h + 1}${w + 1}`);
        return bloodhoundForLargestRegion(matrix, h + 1, w + 1, count, max);
    }

    if(h + 1 < maxH &&                                          // 2
        matrix[h + 1][w] === 1 &&
        arrOfOnes.indexOf(String(h + 1)+String(w)) === -1)
    {
        count++;
        move = true;
        arrOfOnes.push(`${h + 1}${w}`);
        return bloodhoundForLargestRegion(matrix, h + 1, w, count, max);
    }

    if(h + 1 < maxH && w - 1 >= 0 &&                           // 1
        matrix[h + 1][w - 1] === 1 &&
        arrOfOnes.indexOf(String(h + 1)+String(w -1)) === -1)
    {
        count++;
        move = true;
        arrOfOnes.push(`${h + 1}${w - 1}`);
        return bloodhoundForLargestRegion(matrix, h + 1, w - 1, count, max);
    }

    if(w - 1 >= 0                                               //  4
        && matrix[h][w - 1] === 1
        && arrOfOnes.indexOf(String(h)+String(w - 1)) === -1)
    {
        count++;
        move = true;
        arrOfOnes.push(`${h}${w - 1}`);
        return bloodhoundForLargestRegion(matrix, h, w - 1, count, max);
    }

    if(w - 1 >= 0 && h - 1 >= 0                                  //  7
        && matrix[h - 1][w - 1] === 1
        && arrOfOnes.indexOf(String(h - 1)+String(w - 1)) === -1)
    {
        count++;
        move = true;
        arrOfOnes.push(`${h - 1}${w - 1}`);
        return bloodhoundForLargestRegion(matrix, h - 1, w - 1, count, max);
    }

    if(h - 1 >= 0 &&                                             // 8
        matrix[h - 1][w] === 1 &&
        arrOfOnes.indexOf(String(h - 1)+String(w)) === -1)
    {
        count++;
        move = true;
        arrOfOnes.push(`${h - 1}${w}`);
        return bloodhoundForLargestRegion(matrix, h - 1, w, count, max);
    }

    if(h - 1 >= 0 && w + 1 < maxW                                //  9
        && matrix[h - 1][w + 1] === 1 &&
        arrOfOnes.indexOf(String(h - 1)+String(w + 1)) === -1)
    {
        count++;
        move = true;
        arrOfOnes.push(`${h - 1}${w + 1}`);
        return bloodhoundForLargestRegion(matrix, h - 1, w + 1, count, max);
    }

    move = false;

    if (!move) {

        if(count > max) {
            max = arrOfOnes.length;
            console.log(arrOfOnes);
        }

        arrOfOnes = [];
        count = 0;
        initW++;

        if (initW === maxW) {
            initH++;

            if (initH === maxH && initW === maxW) {
                return max;
            }
            initW = 0;
        }
        return bloodhoundForLargestRegion(matrix, initH, initW, count, max);
    }
}

console.log(bloodhoundForLargestRegion(matrix, initH, initW));


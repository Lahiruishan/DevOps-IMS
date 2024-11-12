export function addLeadingZeros(number, length) {             // adding leading zeros to create student id
    return String(number).padStart(length, '0');
};

export function registrationNo(stream, batch, num){           // Create registration number function
    const reg_no = batch + stream + addLeadingZeros(num+1, 4);
    return reg_no;
};

export function bookId(sub, num){                             // Create book id function
    const reg_no = sub + addLeadingZeros(num+1, 4);
    return reg_no;
};

export function extractRegNo(regNo, batch, stream) {          // Extract the numeric part of the registration
    const regex = new RegExp(`${batch}${stream}(\\d{4})`);
    const match = regNo.match(regex);
    return match ? parseInt(match[1], 10) : 0;
};
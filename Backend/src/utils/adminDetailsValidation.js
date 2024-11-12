// Batch registration
export const batchValidation = {
    batch_id: {
        isLength: {
            options: {
                min: 4,
                max: 4
            },
            errorMessage: "batchLenght"

        },
        notEmpty: {
            errorMessage: "batchEmpty"
        }
    }
};

// Stream registration validation
export const streamValidation = {
    stream_id: {
        isLength: {
            options: {
                min: 3,
                max: 3
            },
            errorMessage: "streamLength"
        },
        notEmpty: {
            errorMessage: "streamEmpty"
        },
        isString: {
            errorMessage: "streamString"
        }
    },
    title: {
        notEmpty: {
            errorMessage: "titleEmpty"
        },
        isString: {
            errorMessage: "titleString"
        }
    }
};

// Subject registration validation
export const subjectValidation = {
    sub_id: {
        isLength: {
            options: {
                min: 3,
                max: 8
            },
            errorMessage: "subLength"
        },
        notEmpty: {
            errorMessage: "subEmpty"
        },
        isString: {
            errorMessage: "subString"
        }
    },
    title: {
        notEmpty: {
            errorMessage: "titleEmpty"
        },
        isString: {
            errorMessage: "titleString"
        }
    },
    stream_id: {
        isLength: {
            options: {
                min: 3,
                max: 3
            },
            errorMessage: "streamLength"
        },
        notEmpty: {
            errorMessage: "streamEmpty"
        }
    }
};

// Class registration validation
export const classValidation = {
    sub_id: {
        isLength: {
            options: {
                min: 3,
                max: 8
            },
            errorMessage: "subLength"
        },
        notEmpty: {
            errorMessage: "subEmpty"
        },
        isString: {
            errorMessage: "subString"
        }
    },
    title: {
        notEmpty: {
            errorMessage: "titleEmpty"
        },
        isString: {
            errorMessage: "titleString"
        }
    },
    batch_id: {
        isLength: {
            options: {
                min: 4,
                max: 4
            },
            errorMessage: "batchLength"
        },
        notEmpty: {
            errorMessage: "batchEmpty"
        }
    },
    staff_id: {
        notEmpty: {
            errorMessage: "staffEmpty"
        },
        isString: {
            errorMessage: "staffString"
        }
    },
    type: {
        notEmpty: {
            errorMessage: "typeEmpty"
        },
        isString: {
            errorMessage: "typeString"
        }
    },
    location: {
        notEmpty: {
            errorMessage: "locationEmpty"
        },
        isString: {
            errorMessage: "locationString"
        }
    },
    day: {
        notEmpty: {
            errorMessage: "dayEmpty"
        },
        isString: {
            errorMessage: "dayString"
        }
    },
    fee: {
        notEmpty: {
            errorMessage: "feeEmpty"
        },
        isString: {
            errorMessage: "feeString"
        }
    },
    time: {
        notEmpty: {
            errorMessage: "timeEmpty"
        },
        isString: {
            errorMessage: "timeString"
        }
    }
};

// Admin registration validation
export const adminValidation = {
    username: {
        isLength: {
            options: {
                min: 3
            },
            errorMessage: "usernameLength"
        },
        notEmpty: {
            errorMessage: "usernameEmpty"
        }
    },
    full_name: {
        isLength: {
            options: {
                min: 5,
                max: 32
            },
            errorMessage: "nameLength"
        },
        notEmpty: {
            errorMessage: "nameEmpty"
        },
        isString: {
            errorMessage: "nameString"
        }
    },
    email: {
        isEmail: {
            errorMessage: "isEmail"
        },
        notEmpty: {
            errorMessage: "emailEmpty"
        }
    },
    gender: {
        notEmpty: {
            errorMessage: "genderEmpty"
        },
        isString: {
            errorMessage: "genderString"
        }
    }
};

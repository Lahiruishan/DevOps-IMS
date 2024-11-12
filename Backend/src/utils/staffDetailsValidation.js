// Staff registration validation
export const staffValidation = {
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
    },
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
        }
    }
};

// Staff update validation
export const staffUpdateValidation = {
    username: {
        isLength: {
            options: {
                min: 3
            },
            errorMessage: "usernameLenght"
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
    sub_id: {
        isLength: {
            options: {
                min: 3,
                max: 8
            },
            errorMessage: "subLenght"
        },
        notEmpty: {
            errorMessage: "subEmpty"
        }
    },
    gender: {
        notEmpty: {
            errorMessage: "genderEmpty"
        },
        isString: {
            errorMessage: "genderString"
        }
    },
    phoneHome: {
        optional: true,
        isLength: {
            options: {
                min: 10,
                max: 12
            },
            errorMessage: "homePhoneLength"
        },
        isString: {
            errorMessage: "homePhoneString"
        }
    },
    phoneMobile: {
        optional: true,
        isLength: {
            options: {
                min: 10,
                max: 12
            },
            errorMessage: "mobilePhoneLength"
        },
        isString: {
            errorMessage: "mobilePhoneString"
        }
    },
    profile_pic: {
        optional: true,
        isString: {
            errorMessage: "picString"
        }
    }
};

// Staff login validation
export const staffLoginValidation = {
    email: {
        isEmail: {
            errorMessage: "isEmail"
        },
        notEmpty: {
            errorMessage: "emailEmpty"
        }
    },
    pwd: {
        notEmpty: {
            errorMessage: "pwdEmpty"
        },
        isString: {
            errorMessage: "pwdString"
        }
    }
};

// Staff biography update validation
export const staffBiographyValidation = {
    biography: {
        notEmpty: {
            errorMessage: "biographyEmpty"
        },
        isString: {
            errorMessage: "biographyString"
        },
        isLength: {
            options: { max: 1000 }, // Optional: limit the length if needed
            errorMessage: "biographyLength"
        }
    }
};

// Staff qualification validation
export const staffQualificationValidation = {
    title: {
        notEmpty: {
            errorMessage: "titleEmpty"
        },
        isString: {
            errorMessage: "titleString"
        }
    },
    type: {
        notEmpty: {
            errorMessage: "typeEmpty"
        },
        isIn: {
            options: [['ug', 'pg']],
            errorMessage: "Type must be either 'ug' or 'pg'"
        }
    },
    institute: {
        optional: true,
        isString: {
            errorMessage: "instituteString"
        }
    }
};

// Staff qualification update validation
export const staffQualificationUpdateValidation = {
    title: {
        notEmpty: {
            errorMessage: "titleEmpty"
        },
        isString: {
            errorMessage: "titleString"
        }
    },
    type: {
        notEmpty: {
            errorMessage: "typeEmpty"
        },
        isIn: {
            options: [['ug', 'pg']],
            errorMessage: "Type must be either 'ug' or 'pg'"
        }
    },
    institute: {
        optional: true,
        isString: {
            errorMessage: "instituteString"
        }
    }
};

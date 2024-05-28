import axios from "axios"

// export const apiUrl = 'http://localhost:8000'
export const apiUrl = process.env.apiUrl;

export const reCaptchaKey = process.env.reCaptchaKey;

export const constConfig =
{
    zIndex: 0,
    readonly: false,
    processPasteFromWord: true,
    activeButtonsInReadOnly: ['source', 'fullsize', 'print', 'about', 'dots'],
    toolbarButtonSize: 'middle',
    theme: 'default',
    saveModeInCookie: false,
    spellcheck: true,
    editorCssClass: false,
    triggerChangeEvent: true,
    width: 'auto',
    height: 'auto',
    minHeight: 300,
    toolbarInline: true,
    toolbarInlineForSelection: true,
    toolbarInlineDisableFor: [],
    toolbarInlineDisabledButtons: ['source'],
    direction: '',
    language: 'auto',
    debugLanguage: false,
    i18n: 'en',
    tabIndex: -1,
    toolbar: false,
    inlinePopup: true,
    enter: "P", useSplitMode: false,
    colors: {
        greyscale: ['#000000', '#434343', '#666666', '#999999', '#B7B7B7', '#CCCCCC', '#D9D9D9', '#EFEFEF', '#F3F3F3', '#FFFFFF'],
        palette: ['#980000', '#FF0000', '#FF9900', '#FFFF00', '#00F0F0', '#00FFFF', '#4A86E8', '#0000FF', '#9900FF', '#FF00FF'],
        full: [
            '#E6B8AF', '#F4CCCC', '#FCE5CD', '#FFF2CC', '#D9EAD3', '#D0E0E3', '#C9DAF8', '#CFE2F3', '#D9D2E9', '#EAD1DC',
            '#DD7E6B', '#EA9999', '#F9CB9C', '#FFE599', '#B6D7A8', '#A2C4C9', '#A4C2F4', '#9FC5E8', '#B4A7D6', '#D5A6BD',
            '#CC4125', '#E06666', '#F6B26B', '#FFD966', '#93C47D', '#76A5AF', '#6D9EEB', '#6FA8DC', '#8E7CC3', '#C27BA0',
            '#A61C00', '#CC0000', '#E69138', '#F1C232', '#6AA84F', '#45818E', '#3C78D8', '#3D85C6', '#674EA7', '#A64D79',
            '#85200C', '#990000', '#B45F06', '#BF9000', '#38761D', '#134F5C', '#1155CC', '#0B5394', '#351C75', '#733554',
            '#5B0F00', '#660000', '#783F04', '#7F6000', '#274E13', '#0C343D', '#1C4587', '#073763', '#20124D', '#4C1130'
        ]
    },
    colorPickerDefaultTab: 'background',
    // imageDefaultWidth: 300,
    removeButtons: [],
    disablePlugins: [],
    extraButtons: [],
    sizeLG: 900,
    sizeMD: 700,
    sizeSM: 400,
    sizeSM: 400,
    buttons: [
        'source', '|',
        'bold',
        'strikethrough',
        'underline',
        'italic', '|',
        'ul',
        'ol', '|',
        'outdent', 'indent', '|',
        'font',
        'fontsize',
        'brush',
        'paragraph', '|',
        'image',
        'video',
        'table',
        'link', '|',
        'align', 'undo', 'redo', '|',
        'hr',
        'eraser',
        'copyformat', '|',
        'symbol',
        'fullsize',
        'print',
        'about'
    ],
    buttonsXS: [
        'bold',
        'image', '|',
        'brush',
        'paragraph', '|',
        'align', '|',
        'undo', 'redo', '|',
        'eraser',
        'dots'
    ],
    events: {},
    textIcons: false,
    // uploader: { 'insertImageAsBase64URI': true },
    askBeforePasteFromWord: false,
    hotkeys: {
        redo: 'ctrl+z',
        undo: 'ctrl+y,ctrl+shift+z',
        indent: 'ctrl+]',
        outdent: 'ctrl+[',
        bold: 'ctrl+b',
        italic: 'ctrl+i',
        removeFormat: 'ctrl+shift+m',
        insertOrderedList: 'ctrl+shift+7',
        insertUnorderedList: 'ctrl+shift+8',
        openSearchDialog: 'ctrl+f',
        openReplaceDialog: 'ctrl+r'
    }
}


export const getCategories = async () => {
    if (localStorage.getItem('category_list')) {
        return JSON.parse(localStorage.getItem('category_list'));
    } else {
        return await axios.get(`${apiUrl}/category/`).then(res => {
            localStorage.setItem('category_list', JSON.stringify(res.data.data))
            return res.data.data
        })
    }
}

export const toCapitalCase = (val) => {
    return val.split('-').map(res => res[0]?.toUpperCase() + res.slice(1)).join(' ')
}


export const getPriceInNumber = (price) => {
    return Number(price.split('$')[1].split(',')[0] + price.split('$')[1].split(',')[1]);
}
export const discountedPrice = (price) => {
    price = price - (20 * price / 100)
    return price.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}



export const countryList = ["Afghanistan", "Albania", "Algeria", "American Samoa", "AndorrA", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Congo, The Democratic Republic of the", "Cook Islands", "Costa Rica", "Cote D'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard Island and Mcdonald Islands", "Holy See (Vatican City State)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea", "Kuwait", "Kyrgyzstan", "Lao People'S Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macao", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Palestinian Territory, Occupied", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "RWANDA", "Saint Helena", "Saint Kitts and Nevis", "Saint Lucia", "Saint Pierre and Miquelon", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "Spain", "Sri Lanka", "Sudan", "Suriname", "Svalbard and Jan Mayen", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan, Province of China", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "United States Minor Outlying Islands", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Viet Nam", "Virgin Islands, British", "Virgin Islands, U.S.", "Wallis and Futuna", "Western Sahara", "Yemen", "Zambia", "Zimbabwe"]



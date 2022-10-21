var PFPT_HOSTNAME = 'access.proofpoint';
var META_HOSTNAME = 'metanetworks';

function isValidCategory(param) {
  var paramRegex = /^[a-zA-Z0-9-\s]+$/;
  return param ? Boolean(param.match(paramRegex)) : false;
}

function isValidEmail(email) {
    var emailReg = /^(?:[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[`a-zA-Z0-9`-]*[a-zA-Z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    return email ? Boolean(email.match(emailReg)) : false;
  }

function isValidURL(url) {
  var urlReg = /^(?:(ht|f)tps?:\/\/)?[\w-]+[.][\w-._~:/?#[\]@!$&%'()*+,;=]+$/;
  return url ? Boolean(url.trim().match(urlReg)) : false;
}

function countryCodeToLabel(code) {
  var COUNTRIES = {
  'AD': 'Andorra',
  'AE': 'United Arab Emirates',
  'AF': 'Afghanistan',
  'AG': 'Antigua and Barbuda',
  'AI': 'Anguilla',
  'AL': 'Albania',
  'AM': 'Armenia',
  'AN': 'Netherlands Antilles',
  'AO': 'Angola',
  'AQ': 'Antarctica',
  'AR': 'Argentina',
  'AS': 'American Samoa',
  'AT': 'Austria',
  'AU': 'Australia',
  'AW': 'Aruba',
  'AX': 'Aland Islands',
  'AZ': 'Azerbaijan',
  'BA': 'Bosnia and Herzegovina',
  'BB': 'Barbados',
  'BD': 'Bangladesh',
  'BE': 'Belgium',
  'BF': 'Burkina Faso',
  'BG': 'Bulgaria',
  'BH': 'Bahrain',
  'BI': 'Burundi',
  'BJ': 'Benin',
  'BL': 'Saint Barthelemy',
  'BM': 'Bermuda',
  'BN': 'Brunei',
  'BO': 'Bolivia',
  'BQ': 'Bonaire, Sint Eustatius and Saba',
  'BR': 'Brazil',
  'BS': 'Bahamas',
  'BT': 'Bhutan',
  'BV': 'Bouvet Island',
  'BW': 'Botswana',
  'BY': 'Belarus',
  'BZ': 'Belize',
  'CA': 'Canada',
  'CC': 'Cocos [Keeling] Islands',
  'CD': 'Congo [DRC]',
  'CF': 'Central African Republic',
  'CG': 'Congo [Republic]',
  'CH': 'Switzerland',
  'CI': "CÃ´te d'Ivoire",
  'CK': 'Cook Islands',
  'CL': 'Chile',
  'CM': 'Cameroon',
  'CN': 'China',
  'CO': 'Colombia',
  'CR': 'Costa Rica',
  'CU': 'Cuba',
  'CV': 'Cape Verde',
  'CW': 'Curacao',
  'CX': 'Christmas Island',
  'CY': 'Cyprus',
  'CZ': 'Czech Republic',
  'DE': 'Germany',
  'DJ': 'Djibouti',
  'DK': 'Denmark',
  'DM': 'Dominica',
  'DO': 'Dominican Republic',
  'DZ': 'Algeria',
  'EC': 'Ecuador',
  'EE': 'Estonia',
  'EG': 'Egypt',
  'EH': 'Western Sahara',
  'ER': 'Eritrea',
  'ES': 'Spain',
  'ET': 'Ethiopia',
  'FI': 'Finland',
  'FJ': 'Fiji',
  'FK': 'Falkland Islands [Islas Malvinas]',
  'FM': 'Micronesia',
  'FO': 'Faroe Islands',
  'FR': 'France',
  'GA': 'Gabon',
  'GB': 'United Kingdom',
  'GD': 'Grenada',
  'GE': 'Georgia',
  'GF': 'French Guiana',
  'GG': 'Guernsey',
  'GH': 'Ghana',
  'GI': 'Gibraltar',
  'GL': 'Greenland',
  'GM': 'Gambia',
  'GN': 'Guinea',
  'GP': 'Guadeloupe',
  'GQ': 'Equatorial Guinea',
  'GR': 'Greece',
  'GS': 'South Georgia and the South Sandwich Islands',
  'GT': 'Guatemala',
  'GU': 'Guam',
  'GW': 'Guinea-Bissau',
  'GY': 'Guyana',
  'GZ': 'Gaza Strip',
  'HK': 'Hong Kong',
  'HM': 'Heard Island and McDonald Islands',
  'HN': 'Honduras',
  'HR': 'Croatia',
  'HT': 'Haiti',
  'HU': 'Hungary',
  'ID': 'Indonesia',
  'IE': 'Ireland',
  'IL': 'Israel',
  'IM': 'Isle of Man',
  'IN': 'India',
  'IO': 'British Indian Ocean Territory',
  'IQ': 'Iraq',
  'IR': 'Iran',
  'IS': 'Iceland',
  'IT': 'Italy',
  'JE': 'Jersey',
  'JM': 'Jamaica',
  'JO': 'Jordan',
  'JP': 'Japan',
  'KE': 'Kenya',
  'KG': 'Kyrgyzstan',
  'KH': 'Cambodia',
  'KI': 'Kiribati',
  'KM': 'Comoros',
  'KN': 'Saint Kitts and Nevis',
  'KP': 'North Korea',
  'KR': 'South Korea',
  'KW': 'Kuwait',
  'KY': 'Cayman Islands',
  'KZ': 'Kazakhstan',
  'LA': 'Laos',
  'LB': 'Lebanon',
  'LC': 'Saint Lucia',
  'LI': 'Liechtenstein',
  'LK': 'Sri Lanka',
  'LR': 'Liberia',
  'LS': 'Lesotho',
  'LT': 'Lithuania',
  'LU': 'Luxembourg',
  'LV': 'Latvia',
  'LY': 'Libya',
  'MA': 'Morocco',
  'MC': 'Monaco',
  'MD': 'Moldova',
  'ME': 'Montenegro',
  'MF': 'Saint Martin (French Part)',
  'MG': 'Madagascar',
  'MH': 'Marshall Islands',
  'MK': 'Macedonia [FYROM]',
  'ML': 'Mali',
  'MM': 'Myanmar [Burma]',
  'MN': 'Mongolia',
  'MO': 'Macau',
  'MP': 'Northern Mariana Islands',
  'MQ': 'Martinique',
  'MR': 'Mauritania',
  'MS': 'Montserrat',
  'MT': 'Malta',
  'MU': 'Mauritius',
  'MV': 'Maldives',
  'MW': 'Malawi',
  'MX': 'Mexico',
  'MY': 'Malaysia',
  'MZ': 'Mozambique',
  'NA': 'Namibia',
  'NC': 'New Caledonia',
  'NE': 'Niger',
  'NF': 'Norfolk Island',
  'NG': 'Nigeria',
  'NI': 'Nicaragua',
  'NL': 'Netherlands',
  'NO': 'Norway',
  'NP': 'Nepal',
  'NR': 'Nauru',
  'NU': 'Niue',
  'NZ': 'New Zealand',
  'OM': 'Oman',
  'PA': 'Panama',
  'PE': 'Peru',
  'PF': 'French Polynesia',
  'PG': 'Papua New Guinea',
  'PH': 'Philippines',
  'PK': 'Pakistan',
  'PL': 'Poland',
  'PM': 'Saint Pierre and Miquelon',
  'PN': 'Pitcairn Islands',
  'PR': 'Puerto Rico',
  'PS': 'Palestinian Territories',
  'PT': 'Portugal',
  'PW': 'Palau',
  'PY': 'Paraguay',
  'QA': 'Qatar',
  'RE': 'RÃ©union',
  'RO': 'Romania',
  'RS': 'Serbia',
  'RU': 'Russia',
  'RW': 'Rwanda',
  'SA': 'Saudi Arabia',
  'SB': 'Solomon Islands',
  'SC': 'Seychelles',
  'SD': 'Sudan',
  'SE': 'Sweden',
  'SG': 'Singapore',
  'SH': 'Saint Helena',
  'SI': 'Slovenia',
  'SJ': 'Svalbard and Jan Mayen',
  'SK': 'Slovakia',
  'SL': 'Sierra Leone',
  'SM': 'San Marino',
  'SN': 'Senegal',
  'SO': 'Somalia',
  'SR': 'Suriname',
  'SS': 'South Sudan',
  'ST': 'SÃ£o TomÃ© and PrÃ­ncipe',
  'SV': 'El Salvador',
  'SX': 'Sint Maarten (Dutch Part)',
  'SY': 'Syria',
  'SZ': 'Swaziland',
  'TC': 'Turks and Caicos Islands',
  'TD': 'Chad',
  'TF': 'French Southern Territories',
  'TG': 'Togo',
  'TH': 'Thailand',
  'TJ': 'Tajikistan',
  'TK': 'Tokelau',
  'TL': 'Timor-Leste',
  'TM': 'Turkmenistan',
  'TN': 'Tunisia',
  'TO': 'Tonga',
  'TR': 'Turkey',
  'TT': 'Trinidad and Tobago',
  'TV': 'Tuvalu',
  'TW': 'Taiwan',
  'TZ': 'Tanzania',
  'UA': 'Ukraine',
  'UG': 'Uganda',
  'UM': 'U.S. Minor Outlying Islands',
  'US': 'United States',
  'UY': 'Uruguay',
  'UZ': 'Uzbekistan',
  'VA': 'Vatican City',
  'VC': 'Saint Vincent and the Grenadines',
  'VE': 'Venezuela',
  'VG': 'British Virgin Islands',
  'VI': 'U.S. Virgin Islands',
  'VN': 'Vietnam',
  'VU': 'Vanuatu',
  'WF': 'Wallis and Futuna',
  'WS': 'Samoa',
  'XK': 'Kosovo',
  'YE': 'Yemen',
  'YT': 'Mayotte',
  'ZA': 'South Africa',
  'ZM': 'Zambia',
  'ZW': 'Zimbabwe',
};
  var label = COUNTRIES[code];
  return label ? label : 'unknown';
}

function clearUrlParams() {
  var pathname = window.location.pathname;
  window.history.replaceState({}, document.title, pathname);
}

function getApiPrefix() {
  var env = getEnvSuffix()
  if (env === '.stage') {
      return 'stg1';
  }
  if(env ==='.dev') {
    return 'dev';
  }
  return 'p';
}

function getSiteSuffix() {
  var env = getEnvSuffix();
  var baseSite = getSiteName();
  var envSuffix = env === '.dev' && baseSite === META_HOSTNAME ? 'me' : 'com';
  return envSuffix;
}
function isAlphaNumerical(text) {
  var alphaNumericReg = /^[a-zA-Z0-9\-\_]+$/;
  return text ? Boolean(text.match(alphaNumericReg)) : false;
}

function getEnvSuffix() {
  var { hostname } = window.location;
  var parsedHostname = hostname ? hostname.split('.') : [];
  let envSuffix = parsedHostname.length > 3 ? `.${parsedHostname[1]}` : '';

  if (
    parsedHostname.length === 4
        && parsedHostname.includes(PFPT_HOSTNAME.split('.')[0])
        && parsedHostname.includes(PFPT_HOSTNAME.split('.')[1])
  ) {
    envSuffix = '';
  }

  if (parsedHostname[1] === 'localhost') {
    envSuffix = '.stage';
  }
  return envSuffix;
}

function getShortnameWithPrefix() {
  var { hostname } = window.location;
  return hostname.split('.').length ? hostname.split('.')[0] : '';
}

function getSiteName() {
  var { hostname } = window.location;
  var hostnameSplitted = hostname.split('.');
  if (hostnameSplitted[hostnameSplitted.length - 2] === PFPT_HOSTNAME.split('.')[1]) {
    return PFPT_HOSTNAME;
  }
  return META_HOSTNAME;
}

function getUrlParameter (name) {
    var nameParam = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp(`[\\?&]${nameParam}=([^&]*)`);
    var urlQuery = window.location.search;
    var results = regex.exec(urlQuery);
    return results === null
      ? ''
      : decodeURIComponent(results[1].replace(/\+/g, ' '));
}
function loadImages() {
    const shortname = getShortnameWithPrefix();
    const env = getApiPrefix();
    fetch(`https://assets.metanetworks.com/appearance/${env}/${shortname}/block_page_logo`)
      .then( function (img) {
        if (img.status === 200) {
            const logoElement = document.getElementById('block-page-logo');
            logoElement.src = img.url;
        }
        if (img.status === 403) {
          fetch(`https://assets.metanetworks.com/appearance/${env}/${shortname}/logo`).then(function (img) {
            if (img.status === 200) {
              const logoElement = document.getElementById('block-page-logo');
              logoElement.src = img.url;
            }
          })
        }
      }
    );
    fetch(`https://assets.metanetworks.com/appearance/${env}/${shortname}/block_page_background`)
      .then(function (img) {
        if (img.status === 200) {
            setBackgroundImage(img)
        }
        if (img.status === 403) {
          fetch(`https://assets.metanetworks.com/appearance/${env}/${shortname}/login_background`).then( function(img) {
            if(img.status === 200){
              setBackgroundImage(img)
            }
          })
        }
      }
    );
    fetch(`https://assets.metanetworks.com/appearance/${env}/${shortname}/block_page_icon`)
      .then( function (img) {
        if (img.status === 200) {
            const iconElement = document.getElementById('block-page-icon');
            iconElement.src = img.url;
        }
      }
    );
  }

  function parseTextWithQueryParams(text) {
    var url = getUrlParameter('url');
    var category = getUrlParameter('category');
    if (!isValidURL(url)) {
      url = 'unknown';
    }
    if (!isValidCategory(category)) {
      category = 'unknown';
    }
    var app = getUrlParameter('app_name');
    var country = countryCodeToLabel(getUrlParameter('country'));
    var errorCode = getUrlParameter('error_code');
    var errorDetails = getUrlParameter('error_details');
    var updatedText = text.replaceAll('$url', url);
    updatedText = updatedText.replaceAll('$category', category);
    updatedText = updatedText.replaceAll('$country', country);
    updatedText = updatedText.replaceAll('$app_name', app);
    updatedText = updatedText.replaceAll('$error_code', errorCode);
    updatedText = updatedText.replaceAll('$error_details', errorDetails);
    var textElement = document.getElementById('template-text');
    textElement.innerHTML = updatedText;
  }

  function createTextSectionWithURLParams() {
    var reason = getUrlParameter('reason');
    var url = getUrlParameter('url');
    var textElement = document.getElementById('template-text');
    var textMsg = textElement.innerHTML;
    if (textElement.innerText === 'None') {
      textMsg = getDefaultText(reason, url);
    }
    textMsg = wrapMsgParams(textMsg);
    parseTextWithQueryParams(textMsg)
  }

  function wrapMsgParams(textMsg) {
    var updatedString = textMsg;
    var paramsData = ['$url', '$category', '$country', '$app_name', '$error_code'];
    paramsData.forEach(function(value) {
      updatedString = updatedString.replace(value, `<div title="${value}"><b>${value}</b></div>`)
    });
    return updatedString;
  }

function getDefaultText(reason, url) {
    var templates = {
      content: `You are blocked from browsing to <b>$url</b> \n` +
        `It is categorized as <b>$category</b>\n`,
      atp: `You are blocked from browsing to <b>$url</b>\n` + 'It is categorized as a malicious website.\n',
      threat: `You are blocked from browsing to <b>$url</b>\n`+
        `It is categorized as <b>$category</b>\n`,
      country: `You are blocked from browsing to <b>$url</b>\n` + 'It is in a forbidden country according to your company policy.\n',
      cloud_app: `You are blocked from browsing to <b>$url</b>\n` + 'It is categorized as a forbidden website by your company.\n',
      custom: `You are blocked from browsing to <b>$url</b>\n`,
      aac: `You are not allowed to login to <b>$app_name</b>\n`,
      proxy_error: `The website is unreachable.</br>$error_details</br></br>Code: $error_code\nURL: <b>$url</b>`,
      disabled_org: `Proofpoint Web Security license has expired.\nContact your system administrator.\n`,
      no_params: 'You are blocked from browsing to this website',
    };
    if (templates[reason]) {
      return templates[reason];
    }
    if (!url) {
      return templates.no_params;
    }
    return templates.custom;
  }

  function parseTitleSection() {
    var titleEle = document.getElementById('template-title');
    if (titleEle.innerText === 'None') {
      titleEle.innerText = "Access Denied!";
    }
  }
  function setBackgroundImage(img) {
      var backgroundElement = document.getElementById('background-img');
      backgroundElement.style.backgroundImage = `url(${img.url})`;
      backgroundElement.style.backgroundSize = 'cover';
      backgroundElement.style.backgroundRepeat = 'no-repeat';
      var hexagons = document.getElementById('hexagons-view');
      hexagons.style.visibility = 'hidden';
  }

  function initPage() {
    loadImages();
    parseTitleSection();
    createTextSectionWithURLParams();
    createMailSection();
    clearUrlParams();
  }

  function updateLink(email) {
    var subject = 'Request to re-evaluate website classification';
    var orgId = getUrlParameter('org_id');
    var ruleId = getUrlParameter('rule_id');
    var url = getUrlParameter('url');
    if (!isValidURL(url)) {
      return '';
    }
    if (!isAlphaNumerical(orgId)) {
      orgId = 'unknown';
    }
    if (!isAlphaNumerical(ruleId)) {
      ruleId = 'unknown';
    }
    var body = `I believe a URL I tried browsing was incorrectly blocked. All pertinent information can be found below.%0D%0A` +
    `Tenant ID: ${orgId}%0D%0A
Policy ID: ${ruleId}%0D%0A
url: ${url}%0D%0A
Thanks`
    var link = `mailto:${email}?subject=${subject}&body=${body}`;
    var linkElement = document.getElementById('email-link');
    linkElement.href = link;
  }

  function createMailSection() {
    var contact_email = getUrlParameter('contact_email');
    if (!contact_email || !isValidEmail(contact_email)) {
      var emailWrapper = document.getElementById('email-section');
      emailWrapper.style.visibility = 'hidden';
    } else {
      updateLink(contact_email);
    }
  }

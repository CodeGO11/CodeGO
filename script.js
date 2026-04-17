// A1 Grade chip codes
const a1Codes = [
    'H9TP18A',
    'H9TP17A',
    'H9TQ17A',
    'H9TQ18A',
    'TYDOHH2',
    'TYDOHH1',
    'TYEOHH2',
    'KMQ8X00',
    'KMK8X00',
    'KMK8U00',
    'KMF8200',
    'KMQ8200',
    'KMFE100',
    'KMFE600',
    '16EMCP0',
    '16EMCP1',
    'SDADB48',
    'SDADF4A',
    'KMQ3100',
    'KMF3100',
    '13B-B41',
    '037-125',
    'H9HP27A',
    'MR31000',
    'KMR3100',
    '31-BA-B',
    '31-BM-B',
    'R31-1M-',
    'Q3-13M-',
    'KMRE100',
    'KMGE600',
    'KMQE100',
    'KMQE600',
    'KMR8200',
    'KMR8X00',
    'KMI8X0O',
    'JY932',
    'JY950',
    'JY938',
    'JY977',
    'JZ008',
    'JZ002',
    'JZ006',
    'JZ011',
    'JZ021',
    'JZ022',
    'JZ041',
    'JZ046'
];

// A2 Grade chip codes
const a2Codes = [
    'KMRX100',
    'KMRX600',
    'KMRD600',
    'H9TQ27A',
    'H9TQ26A',
    'KMGX600',
    'KMGD600',
    'KMDD600',
    'KMDX100',
    'KMQ4Z00',
    'KMI4Z00',
    'KM4Z000',
    'KMR4Z00',
    'KMR2100',
    'KMWX100',
    'KMQX100',
    'KMQX600',
    'KMQD600',
    'HPTQ26A',
    'SDA28P-',
    'KM4X600',
    'H9HP52A',
    '331681',
    'H9AG8GD',
    'JZ002',
    'JZ004',
    'JZ007',
    'JZ012',
    'JZ013',
    'JZ014',
    'JZ016',
    'JZ017',
    'JZ018',
    'JZ019',
    'JZ025',
    'JZ042',
    'JZ045',
    'JZ050',
    'JZ051',
    'JZ090'
];

// A3 Grade chip codes
const a3Codes = [
    'KMDH600',
    'H9HP52A',
    'H9HP53A',
    'H9HQ53A',
    'H9HQ54A',
    'KM2H700',
    'KM3H000',
    'KM5H700',
    'KM5C700',
    'KMWC100',
    'KM5P800',
    'KMRC100',
    'KMRH601',
    'KMGP600',
    'H9TQ52A',
    'KMDP600',
    '4DR-64G',
    'SDADA4C',
    'JZ043',
    'JZ047',
    'JZ049',
    'JZ052',
    'JZ053',
    'JZ054',
    'JZ055',
    'JZ060',
    'JZ067',
    'JZ083',
    'JZ090',
    'JZ109',
    'JZ128',
    'JZ160',
    'JZ168',
    'JZ177',
    'JZ178',
    'JZ179',
    'JZ185',
    'JZ186',
    'JZ266',
    'JZ396',
    'JZ409',
    'JZ481',
    'JZ495',
    'JZ528',
    'H9G9G5A'
];

// A4 Grade chip codes
const a4Codes = [
    'KMWV500',
    'KMRV500',
    'KM5V700',
    'KMDV600',
    'KM2V700',
    'KM2V800',
    'KM3V600',
    'H9HQ16A',
    'H9HP16A',
    'KM8V700',
    'KM8V800',
    'H9HQ15A',
    'KM8L900',
    'KM5L900',
    'KM2L900',
    'H9T1GGB',
    'JZ056',
    'JZ057',
    'JZ064',
    'JZ103',
    'JZ144',
    'JZ385',
    'JZ386',
    'JZ387',
    'JZ150',
    'JZ151',
    'JZ152',
    'JZ153',
    'JZ171',
    'JZ187',
    'JZ188',
    'JZ478',
];

// A5 Grade chip codes
const a5Codes = [
    'KM2B800',
    'H9HQ22A',
    'KM8B800',
    'KM8F800',
    'H9HQ21A',
    'JZ059',
    'JZ190'
];

const nonCode32 = [
    'G8',
    'C6',
    'U6',
    'M6',
    'S6',
    'KLMBG',
    'KLUBG',
    'SDIN32G',
    '32G',
];

const nonCode64 = [
    'CG',
    'G9',
    'C7',
    'U7',
    'S7',
    'M78',
    'M76',
    'M74',
    'KLUCG',
    'JZ495',
    'JZ496',
    '3C64G',
    'KLMCG',
    '64G',
];

const non128 = [
    'DG',
    'S8',
    'T0C8',
    'F8TO',
    'JZ144',
    'JZ380',
    'JZ341',
    'H26T870',
    'KLUDG',
    '3CJZ151',
    '3CJZ159',
    '3CJZ160',
    '128G',
];

const non256 = [
    'C9',
    'T1',
    'KLUE',
    'KLMEG',
    '256G',
];

const non512 = [
    'T2',
    'KLUF',
    '512G',
];

// Autocomplete functionality
const chipModelInput = document.getElementById('chipModel');
const suggestionsList = document.getElementById('suggestionsList');

chipModelInput.addEventListener('input', function() {
    const inputValue = this.value.trim().toUpperCase();
    
    if (inputValue.length === 0) {
        suggestionsList.classList.remove('show');
        return;
    }

    // Filter codes that match the input from A1, A2, A3, A4, and A5
    const allCodes = [...a1Codes, ...a2Codes, ...a3Codes, ...a4Codes, ...a5Codes, ...nonCode32, ...nonCode64, ...non128, ...non256, ...non512];
    const filteredCodes = allCodes.filter(code => code.includes(inputValue));

    if (filteredCodes.length === 0) {
        suggestionsList.classList.remove('show');
        return;
    }

    // Display suggestions
    suggestionsList.innerHTML = filteredCodes.map(code => 
        `<div class="suggestion-item" data-code="${code}">${code}</div>`
    ).join('');

    // Add click listeners to suggestions
    suggestionsList.querySelectorAll('.suggestion-item').forEach(item => {
        item.addEventListener('click', function() {
            chipModelInput.value = this.dataset.code;
            suggestionsList.classList.remove('show');
        });
    });

    suggestionsList.classList.add('show');
});

// Hide suggestions when clicking outside
document.addEventListener('click', function(e) {
    if (e.target !== chipModelInput) {
        suggestionsList.classList.remove('show');
    }
});

// Navigation
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelectorAll('.nav a').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

// Check Button
document.getElementById('checkBtn').addEventListener('click', function() {
    const chipModel = document.getElementById('chipModel').value.trim().toUpperCase();
    
    if (!chipModel) {
        alert('Please enter a chip model number');
        return;
    }

    // Simple chip detection logic
    let type = 'Unknown';
    let grade = 'N/A';
    let status = 'Valid';

    // Check if chip model is in A1 codes
    if (a1Codes.some(code => chipModel.includes(code))) {
        type = 'eMMC';
        grade = 'A1';
    } else if (a2Codes.some(code => chipModel.includes(code))) {
        type = 'eMMC';
        grade = 'A2';
    } else if (a3Codes.some(code => chipModel.includes(code))) {
        type = 'eMMC';
        grade = 'A3';
    } else if (a4Codes.some(code => chipModel.includes(code))) {
        type = 'eMMC';
        grade = 'A4';
    } else if (a5Codes.some(code => chipModel.includes(code))) {
        type = 'eMMC';
        grade = 'A5';
    } else if (a5Codes.some(code => chipModel.includes(code))) {
        type = 'eMMC';
        grade = 'A5';
    } else if (nonCode32.some(code => chipModel.includes(code))) {
        type = 'Non-Code 32';
        grade = 'NC32';
    } else if (nonCode64.some(code => chipModel.includes(code))) {
        type = 'Non-Code 64';
        grade = 'NC64';
    } else if (non128.some(code => chipModel.includes(code))) {
        type = 'Non-Code 128';
        grade = 'NC128';
    } else if (non256.some(code => chipModel.includes(code))) {
        type = 'Non-Code 256';
        grade = 'NC256';
    } else if (non512.some(code => chipModel.includes(code))) {
        type = 'Non-Code 512';
        grade = 'NC512';
    }


    // Show result
    document.getElementById('resultModel').textContent = document.getElementById('chipModel').value.trim();
    document.getElementById('resultType').textContent = type;
    document.getElementById('resultGrade').textContent = grade;
    document.getElementById('resultStatus').textContent = status;
    
    document.getElementById('resultSection').classList.add('show');
});

// Enter key support
document.getElementById('chipModel').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('checkBtn').click();
    }
});

// GCash Support Modal
const gcashModal = document.getElementById('gcashModal');
const supportBtn = document.getElementById('supportBtn');
const modalClose = document.querySelector('.modal-close');
const copyBtn = document.getElementById('copyBtn');

// Open modal
supportBtn.addEventListener('click', function() {
    gcashModal.classList.add('show');
});

// Close modal
modalClose.addEventListener('click', function() {
    gcashModal.classList.remove('show');
});

// Close modal when clicking outside
gcashModal.addEventListener('click', function(e) {
    if (e.target === gcashModal) {
        gcashModal.classList.remove('show');
    }
});

// Copy number to clipboard
copyBtn.addEventListener('click', function() {
    const phoneNumber = '09568732849';
    navigator.clipboard.writeText(phoneNumber).then(function() {
        const originalText = copyBtn.textContent;
        copyBtn.textContent = '✓ Copied!';
        setTimeout(function() {
            copyBtn.textContent = originalText;
        }, 2000);
    }).catch(function(err) {
        alert('Failed to copy: ' + err);
    });
});

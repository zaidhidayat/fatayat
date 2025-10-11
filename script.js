// JavaScript for Fatayat NU Kejajar Website

// DOM Elements
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navigation = document.getElementById('navigation');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');

// Sample data (simulating spreadsheet data)
const spreadsheetData = {
    // Dashboard data
    totalDonatur: 156,
    totalPenerima: 89,
    totalDonasi: 'Rp 45.750.000',
    programAktif: 8,
    
    // Specific cell data
    donaturTerbaru: 'Hj. Siti Aminah',
    donasiTerbesar: 'Rp 5.000.000',
    kategoriDonasi: 'Bantuan Pendidikan',
    penerimaTerbaru: 'Keluarga Bpk. Ahmad',
    programTerbaru: 'Beasiswa Anak Yatim',
    wilayahPrioritas: 'Desa Kejajar Timur',
    
    // Table data
    donaturData: [
        {no: 1, nama: 'Hj. Siti Aminah', jumlah: 'Rp 5.000.000', tanggal: '2024-10-10', status: 'Diterima'},
        {no: 2, nama: 'Bp. Muhammad Ali', jumlah: 'Rp 2.500.000', tanggal: '2024-10-09', status: 'Diterima'},
        {no: 3, nama: 'Ibu Fatimah', jumlah: 'Rp 1.000.000', tanggal: '2024-10-08', status: 'Proses'},
        {no: 4, nama: 'Hj. Khadijah', jumlah: 'Rp 3.000.000', tanggal: '2024-10-07', status: 'Diterima'},
        {no: 5, nama: 'Bp. Abdullah', jumlah: 'Rp 1.500.000', tanggal: '2024-10-06', status: 'Diterima'}
    ],
    
    penerimaData: [
        {no: 1, nama: 'Keluarga Bpk. Ahmad', program: 'Bantuan Pangan', wilayah: 'Kejajar Timur', status: 'Aktif'},
        {no: 2, nama: 'Ibu Sari dan 3 anak', program: 'Beasiswa Anak Yatim', wilayah: 'Kejajar Barat', status: 'Aktif'},
        {no: 3, nama: 'Keluarga Ibu Rukmini', program: 'Bantuan Kesehatan', wilayah: 'Kejajar Utara', status: 'Selesai'},
        {no: 4, nama: 'Bp. Joko Susilo', program: 'Modal Usaha', wilayah: 'Kejajar Selatan', status: 'Aktif'},
        {no: 5, nama: 'Keluarga Bpk. Hasan', program: 'Renovasi Rumah', wilayah: 'Kejajar Tengah', status: 'Proses'}
    ]
};

// Initialize website
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    loadSpreadsheetData();
    populateTables();
    addAnimations();
    
    // Show home section by default
    showSection('home');
});

// Navigation functionality
function initializeNavigation() {
    // Mobile menu toggle
    mobileMenuToggle.addEventListener('click', function() {
        navigation.classList.toggle('active');
    });
    
    // Navigation link clicks
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetSection = this.getAttribute('data-section');
            showSection(targetSection);
            
            // Close mobile menu if open
            navigation.classList.remove('active');
            
            // Update active nav link
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navigation.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
            navigation.classList.remove('active');
        }
    });
}

// Show specific section
function showSection(sectionId) {
    // Hide all sections
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Show target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        
        // Add entrance animation
        targetSection.style.opacity = '0';
        targetSection.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            targetSection.style.opacity = '1';
            targetSection.style.transform = 'translateY(0)';
        }, 50);
    }
    
    // Update URL hash
    window.location.hash = sectionId;
    
    // Update navigation active state
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === sectionId) {
            link.classList.add('active');
        }
    });
}

// Load data from "spreadsheet" (simulated)
function loadSpreadsheetData() {
    // Dashboard cards
    updateElement('totalDonatur', spreadsheetData.totalDonatur);
    updateElement('totalPenerima', spreadsheetData.totalPenerima);
    updateElement('totalDonasi', spreadsheetData.totalDonasi);
    updateElement('programAktif', spreadsheetData.programAktif);
    
    // Spreadsheet cell data
    updateElement('donaturTerbaru', spreadsheetData.donaturTerbaru);
    updateElement('donasiTerbesar', spreadsheetData.donasiTerbesar);
    updateElement('kategoriDonasi', spreadsheetData.kategoriDonasi);
    updateElement('penerimaTerbaru', spreadsheetData.penerimaTerbaru);
    updateElement('programTerbaru', spreadsheetData.programTerbaru);
    updateElement('wilayahPrioritas', spreadsheetData.wilayahPrioritas);
}

// Update element with animation
function updateElement(elementId, value) {
    const element = document.getElementById(elementId);
    if (element) {
        // Add loading class
        element.classList.add('loading');
        
        // Simulate loading time
        setTimeout(() => {
            element.textContent = value;
            element.classList.remove('loading');
            
            // Add update animation
            element.style.transform = 'scale(1.1)';
            element.style.color = 'var(--primary-green)';
            
            setTimeout(() => {
                element.style.transform = 'scale(1)';
                element.style.color = '';
            }, 300);
        }, Math.random() * 1000 + 500); // Random delay between 500-1500ms
    }
}

// Populate data tables
function populateTables() {
    populateDonaturTable();
    populatePenerimaTable();
}

// Populate donatur table
function populateDonaturTable() {
    const tableBody = document.getElementById('donaturTableBody');
    if (tableBody) {
        tableBody.innerHTML = '';
        
        spreadsheetData.donaturData.forEach((donatur, index) => {
            const row = createTableRow([
                donatur.no,
                donatur.nama,
                donatur.jumlah,
                donatur.tanggal,
                `<span class="status ${donatur.status.toLowerCase()}">${donatur.status}</span>`
            ]);
            
            // Add entrance animation
            row.style.opacity = '0';
            row.style.transform = 'translateX(-20px)';
            tableBody.appendChild(row);
            
            setTimeout(() => {
                row.style.opacity = '1';
                row.style.transform = 'translateX(0)';
            }, index * 100);
        });
    }
}

// Populate penerima table
function populatePenerimaTable() {
    const tableBody = document.getElementById('penerimaTableBody');
    if (tableBody) {
        tableBody.innerHTML = '';
        
        spreadsheetData.penerimaData.forEach((penerima, index) => {
            const row = createTableRow([
                penerima.no,
                penerima.nama,
                penerima.program,
                penerima.wilayah,
                `<span class="status ${penerima.status.toLowerCase()}">${penerima.status}</span>`
            ]);
            
            // Add entrance animation
            row.style.opacity = '0';
            row.style.transform = 'translateX(-20px)';
            tableBody.appendChild(row);
            
            setTimeout(() => {
                row.style.opacity = '1';
                row.style.transform = 'translateX(0)';
            }, index * 100);
        });
    }
}

// Create table row
function createTableRow(cellData) {
    const row = document.createElement('tr');
    
    cellData.forEach(cellContent => {
        const cell = document.createElement('td');
        cell.innerHTML = cellContent;
        row.appendChild(cell);
    });
    
    return row;
}

// Add scroll animations
function addAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const elementsToAnimate = document.querySelectorAll('.data-card, .timeline-item, .cell-group');
    elementsToAnimate.forEach(el => observer.observe(el));
}

// Simulate real-time data updates
function startDataUpdates() {
    setInterval(() => {
        // Randomly update some values
        if (Math.random() > 0.7) {
            spreadsheetData.totalDonatur += Math.floor(Math.random() * 3);
            updateElement('totalDonatur', spreadsheetData.totalDonatur);
        }
        
        if (Math.random() > 0.8) {
            const currentAmount = parseInt(spreadsheetData.totalDonasi.replace(/[^\d]/g, ''));
            const newAmount = currentAmount + (Math.floor(Math.random() * 500000));
            spreadsheetData.totalDonasi = `Rp ${newAmount.toLocaleString('id-ID')}`;
            updateElement('totalDonasi', spreadsheetData.totalDonasi);
        }
    }, 5000); // Update every 5 seconds
}

// Handle hash-based navigation
window.addEventListener('hashchange', function() {
    const hash = window.location.hash.substring(1);
    if (hash && document.getElementById(hash)) {
        showSection(hash);
    }
});

// Handle initial hash on page load
window.addEventListener('load', function() {
    const hash = window.location.hash.substring(1);
    if (hash && document.getElementById(hash)) {
        showSection(hash);
    }
});

// Smooth scrolling for internal links
document.addEventListener('click', function(e) {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        showSection(targetId);
    }
});

// Add status styling to table cells
function addStatusStyling() {
    const statusElements = document.querySelectorAll('.status');
    statusElements.forEach(status => {
        const statusText = status.textContent.toLowerCase();
        status.classList.add(`status-${statusText}`);
    });
}

// Refresh data function (can be called manually or on interval)
function refreshData() {
    console.log('Refreshing data from spreadsheet...');
    loadSpreadsheetData();
    populateTables();
    addStatusStyling();
}

// Export functions for external use
window.fatayatWebsite = {
    showSection: showSection,
    refreshData: refreshData,
    updateElement: updateElement
};

// Start real-time updates
setTimeout(startDataUpdates, 2000);

// Add CSS for status elements and animations
const additionalCSS = `
    .status {
        padding: 0.25rem 0.75rem;
        border-radius: 15px;
        font-size: 0.85rem;
        font-weight: 600;
        text-transform: uppercase;
    }
    
    .status-diterima, .status-aktif {
        background-color: #E8F5E8;
        color: var(--primary-green);
    }
    
    .status-proses {
        background-color: #FFF8E1;
        color: var(--dark-gold);
    }
    
    .status-selesai {
        background-color: #F3E5F5;
        color: #7B1FA2;
    }
    
    .animate-in {
        animation: slideInUp 0.6s ease-out forwards;
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .section {
        transition: opacity 0.3s ease, transform 0.3s ease;
    }
    
    .data-card, .timeline-item, .cell-group {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .data-card.animate-in, .timeline-item.animate-in, .cell-group.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
`;

// Inject additional CSS
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalCSS;
document.head.appendChild(styleSheet);

// Console welcome message
console.log('🕌 Fatayat NU Kejajar Website loaded successfully!');
console.log('Available functions: fatayatWebsite.showSection(), fatayatWebsite.refreshData()');

// Google Sheets integration (placeholder)
// To connect to actual Google Sheets, replace this with your Google Sheets API implementation
function connectToGoogleSheets() {
    // This is a placeholder function for Google Sheets integration
    // You would need to:
    // 1. Set up Google Sheets API
    // 2. Create a service account or use OAuth
    // 3. Make API calls to fetch specific cell data
    
    console.log('Google Sheets integration ready. Implement API calls here.');
    
    // Example structure for Google Sheets API call:
    /*
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`)
        .then(response => response.json())
        .then(data => {
            // Process the data and update UI elements
            updateElement('totalDonatur', data.values[0][0]);
            updateElement('totalPenerima', data.values[0][1]);
            // etc.
        })
        .catch(error => console.error('Error fetching spreadsheet data:', error));
    */
}
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const defaultLanguage = localStorage.getItem('i18nextLng') || 'en';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        // Sidebar
        'Menu Validator': 'Validator Menu',
        'Menu Admin': 'Admin Menu',
        Dashboard: 'Dashboard',
        'Legit Check': 'Legit Check',
        'Users Manage': 'User Manage',
        'Brands Hub': 'Brands Hub',
        Validators: 'Validators',
        Settings: 'Settings',
        'Sign In': 'Sign In',
        'Log Out': 'Log Out',

        // Header
        'Dashboard (Admin)': 'Dashboard (Admin)',
        'Legit Check (Admin)': 'Legit Check (Admin)',
        'Users Management (Admin)': 'Users Management (Admin)',
        'Brands Management (Admin)': 'Brands Management (Admin)',
        'Validators Management (Admin)': 'Validators Management (Admin)',
        'Settings (Admin)': 'Settings (Admin)',

        // Generals
        Display: 'Display',
        Showing: 'Showing',
        to: 'to',
        of: 'of',
        records: 'records',
        'Add Validator': 'Add Validator',
        'Add Brand': 'Add Brand',

        // Tables
        'Date Creation': 'Date Creation',
        Action: 'Action',
        'Brand Logo': 'Brand Logo',
        'Brand Name': 'Brand Name',
        'Item Id': 'Item Id',
        Brand: 'Brand',
        Status: 'Status',
        Authenticity: 'Authenticity',
        'Date Uploaded': 'Date Uploaded',
        Validator: 'Validator',

        // Dashboard Admin
        'Total Legit Check': 'Total Legit Check',
        'Total User': 'Total User',
        'Total Validators': 'Total Validators',
        'Total Checked': 'Total Checked',
        'Total Pending': 'Total Pending',

        // Settings
        'Personal Information': 'Personal Information',
        Username: 'Username',
        'Your Name': 'Your Name',
        'Phone Number': 'Phone Number',
        Gender: 'Gender',
        'Select Gender': 'Select Gender',
        Male: 'Male',
        Female: 'Female',
        Other: 'Other',
        Profile: 'Profile',
        Preview: 'Preview',
        'Security Information': 'Security Information',
        Email: 'Email',
        Password: 'Password',
        'Old Password': 'Old Password',
        'New Password': 'New Password',
        'Confirm New Password': 'Confirm New Password',
        'Change Password': 'Change Password',
        Cancel: 'Cancel',
        'Save Information': 'Save Information',
      },
    },
    id: {
      translation: {
        // Sidebar
        'Menu Validator': 'Menu Validator',
        'Menu Admin': 'Menu Admin',
        Dashboard: 'Dasbor',
        'Legit Check': 'Legit Produk',
        'Users Manage': 'Pengguna',
        'Brands Hub': 'Pusat Merek',
        Validators: 'Validator',
        Settings: 'Pengaturan',
        'Sign In': 'Masuk',
        'Log Out': 'Keluar',

        // Header
        'Dashboard (Admin)': 'Dasbor (Admin)',
        'Legit Check (Admin)': 'Legit Produk (Admin)',
        'Users Management (Admin)': 'Manajemen Pengguna (Admin)',
        'Brands Management (Admin)': 'Manajemen Merek (Admin)',
        'Validators Management (Admin)': 'Penilai Produk (Admin)',
        'Settings (Admin)': 'Pengaturan (Admin)',

        // Generals
        Showing: 'Menampilkan',
        to: 'hingga',
        of: 'dari',
        records: 'data',
        'Add Validator': 'Tambah Validator',
        'Edit Brand': 'Edit Merek',
        'Add Brand': 'Tambah Brand',
        'Block User': 'Blokir Pengguna',
        'Unblock User': 'Actifkan Pengguna',
        'Friendly Reminder': 'Peringatan',

        // Details
        'Legit Check Detail': 'Detail Legit',
        'Loading Details': 'Memuat Detail',
        'Id Legit': 'Legit Id',
        'Id User': 'User Id',
        'Item Category': 'Kategori Produk',
        'Item Brand': 'Merek Produk',
        'Item Name': 'Nama Produk',
        'Item Photos': 'Foto Produk',
        Purchase: 'Pembelian',
        'Store Name': 'Nama Toko',
        'Item Condition': 'Kondisi Produk',
        'Other Notes': 'Catatan Lainnya',
        Authenticity: 'Hasil Validasi Produk',
        'Detail Description': 'Detail Deskripsi',
        'Contact the Validator to check the items authenticity':
          'Hubungi Validator untuk memeriksa keaslian item',
        Name: 'Nama',
        'Time Validation': 'Waktu Validasi',
        'Error to get detail Information': 'Gagal Mengambil Informasi Detail',
        Close: 'Tutup',

        // Modals
        'Create Brand': 'Buat Brand',
        'Brand Logo': 'Logo Merek',
        'Brand Name': 'Nama Merek',
        'Add New Brand Name': 'Tambah Nama Merek Baru',

        // Dashboard Admin
        'Total Legit Check': 'Total Produk Legit',
        'Total User': 'Total Pengguna',
        'Total Validators': 'Total Penilai Produk',
        'Total Checked': 'Total Tervalidasi',
        'Total Pending': 'Total Tertunda',

        // Tables
        DONE: 'SELESAI',
        PENDING: 'MENUNGGU',
        DECLINED: 'DITOLAK',
        ORIGINAL: 'ASLI',
        FAKE: 'PALSU',
        'Date Creation': 'Tanggal Dibuat',
        Action: 'Aksi',
        'Brand Logo': 'Logo Merek',
        'Brand Name': 'Nama Merek',
        'Item Id': 'Id Produk',
        Brand: 'Merek',
        Status: 'Status',
        Authenticity: 'Otentisitas',
        'Date Uploaded': 'Tanggal di Unggah',
        Validator: 'Validator',

        // Settings
        'Personal Information': 'Informasi Pribadi',
        Username: 'Nama Pengguna',
        'Your Name': 'Nama Anda',
        'Phone Number': 'Nomor Telepon',
        Gender: 'Jenis Kelamin',
        'Select Gender': 'Pilih Jenis Kelamin',
        Male: 'Laki-laki',
        Female: 'Perempuan',
        Other: 'Lainnya',
        Profile: 'Profil',
        Preview: 'Pratinjau',
        'Security Information': 'Informasi Keamanan',
        Email: 'Email',
        Password: 'Password',
        'Old Password': 'Password Lama',
        'New Password': 'Password Baru',
        'Confirm New Password': 'Konfirmasi Password Baru',
        'Change Password': 'Ubah Password',
        Cancel: 'Batal',
        'Save Information': 'Simpan Informasi',
      },
    },
  },
  lng: defaultLanguage,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

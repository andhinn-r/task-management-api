# Task Management API

REST API sederhana untuk mengelola daftar tugas menggunakan Express.js dan TypeScript.

## Fitur
- Melihat semua task
- Melihat detail task berdasarkan ID
- Menambahkan task
- Mengubah task
- Menghapus task
- Validasi data dan status task

## Teknologi
- Node.js
- Express.js
- TypeScript

## Menjalankan Project

```bash
npm install
npm run dev
```

Server berjalan di `http://localhost:5000`.

## API Endpoint

| Method | Endpoint | Fungsi |
|---|---|---|
| GET | `/api/v1/tasks` | Melihat semua task |
| GET | `/api/v1/tasks/:id` | Detail task |
| POST | `/api/v1/tasks` | Menambah task |
| PUT | `/api/v1/tasks/:id` | Mengubah task |
| DELETE | `/api/v1/tasks/:id` | Menghapus task |

**Note:** Data task disimpan sementara menggunakan in-memory dummy data.
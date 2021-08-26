const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')

const { Pool } = require('pg')
const { type } = require('os')
const pool = new Pool({
    user: 'thuandang', 
    database: 'react_fullstack_mvp', 
    host: 'localhost',
    password: '',
})

// port 
const PORT = process.env.PORT || 4000;

// middle wares
app.use(express.json());
app.use(cors());

// handle routes
// GET all 
app.get('/api/users', async(req, res, next) => {
    try {
        let {rows} = await pool.query('SELECT * FROM users')
        res.status(200).json(rows)
    } catch (error) {
        console.log('Internal server error')
        res.status(500).json(error)
    }
})

// GET one based on user id 
app.get('/api/users/:id', async(req, res, next) => {
    try {
        const {id} = req.params
        let {rows} = await pool.query('SELECT * FROM users WHERE user_id = $1', [id])
        res.status(200).json(rows)
    } catch (error) {
        console.log('Internal server error')
        res.status(500).json(error)
    }
})

// POST one 
app.post('/api/users', async(req, res, next) => {
    try {
        const {user_name, post_content, like_count} = req.body
        // data validation
        if (typeof user_name !== 'string' || typeof post_content !== 'string' || typeof like_count !== 'number') {
            res.status(404).send('Bad request')
        } else {
            let {rows} = await pool.query('INSERT INTO users(user_name, post_content, like_count) VALUES ($1, $2, $3) RETURNING *', [user_name, post_content, like_count])
            res.status(201).json(rows)
        }
    } catch (error) {
        console.log('Internal Server Error')
        res.status(500).json(error)
    }
})

// UPDATE one
app.patch('/api/users/:id', async(req, res, next) => {
    try {
        const {id} = req.params
        const {user_name, post_content, like_count} = req.body
        if (typeof user_name !== 'string' || typeof post_content !== 'string' || typeof like_count !== 'number') {
            res.status(404).send('Bad request')
        } else {
            let {rows} = await pool.query('UPDATE users SET user_name = $1, post_content = $2, like_count = $3 WHERE user_id = $4 RETURNING *', [user_name, post_content, like_count, id])
            res.status(200).json(rows)
        }
    } catch (error) {
        console.log('Internal Server Error')
        res.status(500).json(error)
    }
})

// DELETE one 
app.delete('/api/users/:id', async(req, res, next) => {
    try {
        const {id} = req.params
        let {rows} = await pool.query('DELETE FROM users WHERE user_id = $1 RETURNING *', [id])
        res.status(200).json(rows)
    } catch (error) {
        console.log('Internal Server Error')
        res.status(500).json(error)
    }
})

// DELETE all 
app.delete('/api/users', async(req, res, next) => {
    try {
        let {rows} = await pool.query('TRUNCATE TABLE users')
        res.status(200).json({message: 'all data deleted'})
    } catch (error) {
        console.log('Internal Server Error')
        res.status(500).json(error)
    }
})

// handle unknown http reqs
app.use( (req, res, next) => {
    res.status(404).end("Not Found")
})

// listen on port
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})
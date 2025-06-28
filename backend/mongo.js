/**
 * @file config/db.js
 * This file connects to the MongoDB database using Mongoose.
 * It also initializes the database by creating collections if they do not exist.
 * The connectDB function is exported and imported into main.js.
 */
import mongoose from 'mongoose'
import Agenda from 'agenda'
import { ENV } from '../constants/env.js'

let agenda

const connectDB = async () => {
    try {
        await mongoose.connect(ENV.MONGO_URI, {
            serverSelectionTimeoutMS: 30000,
            tls: ENV.NODE_ENV === 'production' || ENV.NODE_ENV === 'development',
            tlsAllowInvalidCertificates: ENV.NODE_ENV === 'production' || ENV.NODE_ENV === 'development',
            // tls: false,
            // tlsAllowInvalidCertificates: false,
        })

        console.log(
            `🔗 MongoDB connected in ${ENV.NODE_ENV} environment to ${ENV.MONGO_URI}`
        )

        await initializeDatabase()

        // Initialize and configure Agenda
        agenda = new Agenda({
            db: {
                address: ENV.MONGO_URI,
                collection: 'agendaJobs'
            },
        })

        const now = new Date()

        // Define both token jobs below

        await agenda.start()

        // Schedule jobs below

        console.log('Agenda initialized')

    } catch (err) {
        console.error(`MongoDB connection error:`, err)
        throw err
    }
}

mongoose.connection.on('error', (err) =>
    console.error(`MongoDB error: ${err}`)
)
mongoose.connection.on('disconnected', () =>
    console.log('Mongoose disconnected')
)

const initializeDatabase = async () => {
    const db = mongoose.connection.db
    const collections = [
        'logs',
        'blogs',
        'users',       
        'pages',
        'menus',
        'footer',
        'reviews',
        'packages',
        'contactForm',
        'interactions',
        'chatMessages',
        'notifications',
    ]

    for (const collection of collections) {
        const exists = await db.listCollections({ name: collection }).toArray()
        if (exists.length === 0) {
            await db.createCollection(collection)
            console.log(`Created '${collection}' collection`)
        }
    }
}

export default connectDB
export { agenda } 
/**
 * This file connects to the MongoDB database using Mongoose.
 * It also initializes the database by creating collections if they do not exist.
 * The connectDB function is exported and imported into main.js.
 */

import {Router} from 'express'

const router = new Router()
import PostController from './../controller/post.controller.js'

router.post('/post', PostController.createPost)
router.get('/post', PostController.getPostsByUser)

export default router

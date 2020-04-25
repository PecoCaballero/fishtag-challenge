import { create } from 'apisauce'
import axios from 'axios'

// const api = create({
//     headers: {'Content-Type': 'application/json'},
//     baseURL: 'https://576dfefa3ea9ed5e3579e713e140ae81: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@fish-tag.myshopify.com/admin/api/2020-04/'
// })

const api = axios.create({
    baseURL: 'https://576dfefa3ea9ed5e3579e713e140ae81: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@fish-tag.myshopify.com/admin/api/2020-04/',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Basic NTc2ZGZlZmEzZWE5ZWQ1ZTM1NzllNzEzZTE0MGFlODE6c2hwcGFfYmRiYjkwMWQ0ZGE1MDU1MGVhNTIyNzY4OGVkYTBiMzE='
    }
})

export default api;
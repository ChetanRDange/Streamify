import axios from "axios";
import React from 'react';

const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3/",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMGU1ZGJhNzM3M2UyZDlhNDM4YWQ1MzIyOGNhNTNkYiIsIm5iZiI6MTczMTI2NDc2Ni43MzQ4NTQ1LCJzdWIiOiI2NzMwZTdlZTU3YjMwMWYzYzkzMWMwZTgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Zeuqzlwf3u93akbrmW7nE4YyK17SDo-uKRGgcNEQKGg'
      }
})

export default instance;  
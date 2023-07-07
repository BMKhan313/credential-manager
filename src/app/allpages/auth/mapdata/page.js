"use client"

import React,{useEffect,useState} from 'react'
// import { user } from '../mock/page'
const user = [
  {
  success: true,
  "user": {
      "id": 4,
      "email": "bahimis165@soremap.com",
      "email_verified_at": null,
      "email_verified": 0,
      "contact_no": "123",
      "country": "Pakistan",
      "state": "Islamabad",
      "city": "Islamabad",
      "created_at": "2023-06-10T10:34:39.000000Z",
      "updated_at": "2023-06-10T10:34:39.000000Z",
      "profile_picture": null,
      "company_code": "bot-101",
      "cnic_no": "1213",
      "consent": null,
      "additional_info": null,
      "type": null,
      "access_screens": [
          {
              "id": 1,
              "user_id": 4,
              "screen_name": "org_name",
              "created_at": "2023-06-12T06:28:57.000000Z",
              "updated_at": "2023-06-12T06:28:57.000000Z"
          },
          {
              "id": 2,
              "user_id": 4,
              "screen_name": "org_creds",
              "created_at": "2023-06-12T06:28:57.000000Z",
              "updated_at": "2023-06-12T06:28:57.000000Z"
          }
      ]
  },
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3JlY3J1aXRtZW50L2xvZ2luIiwiaWF0IjoxNjg2NTQ5MDQyLCJleHAiOjE2ODY1NTI2NDIsIm5iZiI6MTY4NjU0OTA0MiwianRpIjoiNWRwVnZxaUlRNDZyZ1ZORyIsInN1YiI6NCwicHJ2IjoiODg3Mzc5NjJhZGJjYzYzODM2ODBiNmUzMzU5MWZjZDkzYTE3MDJiMyJ9.LqAefb54_CaSNR-XVUZnsBnx-u45Mnn-XIxJrTQHW2I",
  "expires": 216000
}]

const mapdata = () => {
    const [data, setData] = useState(user)
    console.log(data)
  return (
    <div>
        <h2>mapdata</h2>


    </div>
  )
}

export default mapdata
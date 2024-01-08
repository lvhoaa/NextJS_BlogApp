"use client";
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import useSWR from 'swr';

const Dashboard = () => {
  const session = useSession();
  console.log(session);
  console.log(session.data.user)
  const fetcher = (...args) => fetch(...args).then(res=>res.json())

  const {data, error, isLoading} = useSWR("https://jsonplaceholder.typicode.com/posts")

  console.log(data);
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard;
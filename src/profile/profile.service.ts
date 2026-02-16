import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';

@Injectable()
export class ProfileService {
    private profiles=[
  {
    "name": "AI Resume Analyzer",
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "desc": "An AI-powered tool that analyzes resumes and provides improvement suggestions using LLMs."
  },
  {
    "name": "Interview Scheduler",
    "id": "6f1a7c92-3d44-4c3a-bf1e-91b4c2a8f101",
    "desc": "A full-stack application for scheduling and managing technical interviews with calendar integration."
  },
  {
    "name": "Ocean Data Dashboard",
    "id": "8c3b2a10-5e7f-4d91-9a0b-123456789abc",
    "desc": "A dashboard for visualizing and analyzing oceanographic data using interactive charts and AI summaries."
  },
  {
    "name": "Opinion Trading Platform",
    "id": "a12f9e33-77b4-4e6c-8d11-998877665544",
    "desc": "A real-time platform where users can trade opinions on events with live data updates and analytics."
  }
]

findAll(){
    return this.profiles;
}

findById(id:String){
    return this.profiles.find((profile)=>profile.id===id); 
}

signUp(name : string , desc : string){
    let id = randomUUID();
    const first = {
        name,
        id,
        desc
    }

    const res = this.profiles.push(first);
    return res;

}


}

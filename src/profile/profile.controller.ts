import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Query} from '@nestjs/common';
import { ProfileDtoConatiner } from './dto/create-profile-dto';
import { ProfileService } from './profile.service';

@Controller('profile')
export class ProfileController {

    constructor(private profileService: ProfileService){}

    @Get()
    getAll(){
        return this.profileService.findAll();
    }
    getProfiles(@Query('userId') userId: string) {
        return this.profileService.findById(userId);
    }
    getLocation(@Query('location') location: string) {
        return [{ location }];
    }
    @Get(':id')
    getProfileById(@Param('id') id: string){
        return{id};
    }

    @Post()
    SignUp(@Body() container : ProfileDtoConatiner  ){
    
        return{
            profile:this.profileService.signUp(container.name,container.desc)
        
        }
    }

    @Put(':id')

    // Update(@Param('id') id:string , @Body() container :ProfileDtoConatiner ){
    //     return{id,
    //         name:container.name,
    //         age: container.age,
    //         desc: container.desc
    //     }
    // }

    @Delete(':id')
    @HttpCode(HttpStatus.OK)
    remove(@Param('id') id:string){
        return{id};
    }



}

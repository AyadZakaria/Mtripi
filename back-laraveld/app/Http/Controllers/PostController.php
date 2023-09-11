<?php

namespace App\Http\Controllers;

use App\Models\Post;

use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $allposts =Post::with('user')->get();

        return $allposts;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $fileName = $request->image_path->getClientOriginalExtension();
        $image = Str::random() .'.'. $fileName; 
        $image_path = $request->image_path->storeAs('images/posts/', $image, 'public');
 
         // ADD CATEGORY 
        $inputs = $request->all();
        $inputs['image_path'] = $image;
        $post = Post::create($inputs);
 
        return $this->returnData('post created successfully', $post); 
    }


    public function postUpdate(Request $request,$id)
    {   $thePost =Post::find($id);
        $fileName = $request->file("image_path")->getClientOriginalExtension();
        $image = Str::random() .'.'. $fileName; 
        $image_path = $request->image_path->storeAs('images/posts/', $image, 'public');
        
        $thePost->title=$request->title;
        $thePost->description=$request->description;
        $thePost->budget=$request->budget;
        $thePost->start_date=$request->start_date;
        $thePost->image_path = $image;
        $thePost->destination = $request->destination;
        $thePost->user_id = $request->user_id;
        $thePost->save();
        return $this->returnData('post updated successfully', $thePost);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
        $post = auth()->user()->id;
        $user = User::find($post);
        $posts = $user->posts()->get(); 
        
    
        
        return $posts;
    }

    public function showprofile($id)
    {
        
        $allposts =User::with('posts')->where('id',$id)->get();

        return $allposts;
    }
    public function destroyPost($id){
        $post= Post::where('id',$id)->delete();
        return ['message' => 'Your task has been removed'];
        
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
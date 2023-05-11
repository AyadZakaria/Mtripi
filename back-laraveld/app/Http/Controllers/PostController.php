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
<<<<<<< HEAD
        $allposts =P::with('posts')->get();
=======
        $allposts =Post::with('user')->get();
>>>>>>> e614b297f18e363c940b6f96ac194315509cfe3b
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
@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <post-component :posts={{json_encode($posts)}} post-url={{route('post.store')}} csrf_token='{{csrf_token()}}'></post-component>
    </div>
</div>
@endsection
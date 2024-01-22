docker build -t recipe-shop ./

docker run -it -v "$(pwd):/app" -p 4200:4200 recipe-shop:latest bash 

if need new component nw g c

ng serve --host 0.0.0.0

(if error  Permission denied => sudo chown -R your_username:your_group name_project)

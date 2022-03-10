# git
分布式版本控制系统

# 使用git

1, 使用git的第一步就是新建一个git仓库 
在项目目录中运行 `git init` 命令
 
git add .  将没有添加到仓库的文件添加到仓库
git add filePath 将指定文件添加到仓库

git commit -m '提交说明'  用命令git commit告诉Git，把文件提交到仓库

git status  查看更改

git reset --hard HEAD^ 回退到上一次提交
git reset --hard commitid 回退到指定提交

git log 查看提交日志
git log --pretty=oneline  以一行展示的方式查看提交日志
git reflog 参看所有操作记录

git checkout -- readme.txt 

git remote -v 参看远程仓库
git remote add origin ssh地址 添加远程仓库

git push origin master 将本地提交，发送到远程仓库 master分子

git clone 地址  克隆一个远程仓库的代码

git@github.com:liuyu00/maoyan.git

git pull origin 分子名称  从远程仓库更新更改

分支管理
git branch [branchName]  创建一个新分支
git checkout [branchName]  切换分支
git checkout -b [branchName]  创建并且切换分支

分支管理策略
master 主分支
dev 开发分支
liuyu 开发工程师刘宇的分支



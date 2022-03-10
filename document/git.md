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

<<<<<<< HEAD

# git 指令

git branch 查看本地所有分支
git status 查看当前状态 
git commit 提交 
git branch -a 查看所有的分支
git branch -r 查看远程所有分支
git commit -am "init" 提交并且加注释 
git remote add origin git@192.168.1.119:ndshow
git push origin master 将文件给推到服务器上
git remote show origin 显示远程库origin里的资源
git push origin master:develop
git push origin master:hb-dev 将本地库与服务器上的库进行关联
git checkout --track origin/dev 切换到远程dev分支
git branch -D master develop 删除本地库develop
git checkout -b dev 建立一个新的本地分支dev
git merge origin/dev 将分支dev与当前分支进行合并
git checkout dev 切换到本地dev分支
git remote show 查看远程库
git add .
git rm 文件名(包括路径) 从git中删除指定文件
git clone git://github.com/schacon/grit.git 从服务器上将代码给拉下来
git config --list 看所有用户
git ls-files 看已经被提交的
git rm [file name] 删除一个文件
git commit -a 提交当前repos的所有的改变
git add [file name] 添加一个文件到git index
git commit -v 当你用－v参数的时候可以看commit的差异
git commit -m "This is the message describing the commit" 添加commit信息
git commit -a -a是代表add，把所有的change加到git index里然后再commit
git commit -a -v 一般提交命令
git log 看你commit的日志
git diff 查看尚未暂存的更新
git rm a.a 移除文件(从暂存区和工作区中删除)
git rm --cached a.a 移除文件(只从暂存区中删除)
git commit -m "remove" 移除文件(从Git中删除)
git rm -f a.a 强行移除修改后文件(从暂存区和工作区中删除)
git diff --cached 或 $ git diff --staged 查看尚未提交的更新
git stash push 将文件给push到一个临时空间中
git stash pop 将文件从临时空间pop下来
=======
git pull origin 分子名称  从远程仓库更新更改

分支管理
git branch [branchName]  创建一个新分支
git checkout [branchName]  切换分支
git checkout -b [branchName]  创建并且切换分支

分支管理策略
master 主分支
dev 开发分支
liuyu 开发工程师刘宇的分支


>>>>>>> 02d4d4ef578d7098a585a380d9ffc47a66f93fab

# Description
A short coder plugin I wrote.
May not seem immediately useful.
What this plugin does is it replaces
'shortcodes' with HTML code.
Example: `>--sc1--<`.
These weird `>--` and `--<` are telling
the plugin that whatever is in between
these two things is supposed to be replaced.
In the global scope, you will find a variable
`shortCoderDataBase`. That variable should have
a property called sc1. The value of `shortCoderDatabase.sc1`
is the HTML code that you want to replace `>--sc1--<` with.
# ANshortcoder documentation
To get ANshortcoder v1 on your webpage, you will
need to grab a copy of the shortcoder script.
Simply do that by hitting the 'clone' button
in this repository. After you have downloaded a
copy of ANshortcoder, move it into the root
directory of your project. In every HTML file
that makes your project up, make sure you have something
like this:
`<script src=[relative path of short coder module]></script><script>var shortCoderDataBase = {[put all shortcodes here, along with their value]}; window.onload=function(){ANshortcoder.init()}</script>`.
Then, when you load your page, if you fullfilled
all of the requirments of the module, you should notice
that all `>-- --<` will be replaced.

/**
 * Copyright(c) dtysky<dtysky@outlook.com>
 * Created: 16/3/18
 * Description: Manage pages.
 */


const path = require('path');


function Storage() {
    //name: path
    this.books = {};
    //{indexes, {name, path}}
    this.nowBook = {
        root: ".",
        indexes: [
            "test1",
            "test2",
            "test3",
            "test4"
        ],
        chapters: {
            test1: {
                indexes: [
                    "test1",
                    "test2",
                    "test3",
                    "test4"
                ]
            },
            test2: {
                indexes: [
                    "test1",
                    "test2",
                    "test3",
                    "test4"
                ]
            },
            test3: {
                indexes: [
                    "test1",
                    "test2",
                    "test3",
                    "test4"
                ]
            },
            test4: {
                indexes: [
                    "test1",
                    "test2",
                    "test3",
                    "test4"
                ]
            }

        }

    };
}


Storage.prototype.loadBook = function(fp) {
    //如果已经存在.tree

    //否则,创建

};

Storage.prototype.getIndexes = function(chapter) {
    if(chapter === undefined){
        return this.nowBook.chapters.indexes;
    }
    return this.nowBook.chapters[chapter].indexes;
};

Storage.prototype.getPath = function(name, chapter) {
    if(chapter === undefined){
        return path.join(
            this.nowBook.root,
            name
        );
    }
    return path.join(
        this.nowBook.root,
        chapter,
        name
    );
};

Storage.prototype.createToDevice = function(type, fp) {

};

Storage.prototype.createBook = function(name) {
    var nowPath = path.join(this.nowBook.root, name);
    //create
};

Storage.prototype.create = function(name, chapter) {
    if(chapter === undefined){
        this.nowBook.indexes.push(name);
        this.createToDevice(
            name
        );
        return;
    }
    this.nowBook.chapters[chapter].indexes.push(name);
    this.createToDevice(
        path.join(chapter, name)
    );
};


Storage.prototype.setIndexes = function(indexes, chapter) {
    if(chapter === undefined){
        this.nowBook.chapters.indexes = indexes;
        return;
    }
    this.nowBook.chapters[chapter].indexes = indexes;
};

Storage.prototype.removeFromDevice = function(name) {
    var nowPath = path.join(this.nowBook.root, name);
    //remove
};

Storage.prototype.remove = function(name, chapter) {
    var i;
    if(chapter === undefined){
        i = this.nowBook.indexes.indexOf(name);
        this.nowBook.indexes.splice(i, 1);
        this.removeFromDevice(
            name
        );
        return;
    }
    i = this.nowBook.chapters[chapter].indexes.indexOf(name);
    this.nowBook.chapters[chapter].indexes.splice(i, 1);
    this.removeFromDevice(
        path.join(chapter, name)
    );
};

Storage.prototype.renameFromDevice = function(oldname, name) {
    var oldPath = path.join(this.nowBook.root, oldname);
    var newPath = path.join(this.nowBook.root, name);
    //rename
};

Storage.prototype.rename = function(oldName, name, chapter) {
    var i;
    if(chapter === undefined){
        i = this.nowBook.indexes.indexOf(oldName);
        this.nowBook.indexes[i] = name;
        this.renameFromDevice(
            oldName,
            name
        );
        return;
    }
    i = this.nowBook.chapters[chapter].indexes.indexOf(oldName);
    this.nowBook.chapters[chapter].indexes[i] = name;
    this.renameFromDevice(
        path.join(chapter, oldName),
        path.join(chapter, name)
    );
};

module.exports = new Storage();
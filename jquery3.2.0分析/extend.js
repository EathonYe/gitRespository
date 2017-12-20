function extend() {
    var options, name, src, copy, copyIsArray, clone,
        target = argument[0] || {},
        i = 1,
        length = arguments.length,
        deep = false;

    // 处理深拷贝情况
    if ( typeof target === 'boolean' ) {
        deep = target;

        target = arguments[ i ] || {}; // 目标转移到下一个参数
        i++; // 索引加1
    }

    // 如果实参不是一个对象并且不是函数，则赋值空对象（排除数组、字符串、布尔值、数值、null、undefined）
    // 这里说明extend方法并不能合并成数组
    if ( typeof target !== 'object' && !jQuery.isFunction( target ) ) {
        target = {};
    }

    // 如果只穿入一个参数，那么该参数成为jQuery的属性
    if ( i === length ) {
        target = this;
        i--;
    }

    // 如果不止一个参数，则处理剩下的参数
    // 要注意的是，target已经确定下来了，就是第一个非布尔值或空对象
    for ( ; i < length; i++ ) {
        // 这边排除null和undefined两种情况
        if ( (options = arguments[ i ]) != null ) { // 使用==做了类型转换

            // 执行到这里，target为arguments[i-1],options为arguments[i]
            for ( name in options ) {
                src = target[ name ];
                copy = options[ name ];

                // 防止无限循环,当目标元素和要拷贝的元素相同时跳过
                if ( target === copy ) {
                    continue;
                }

                // 对于深拷贝而言，这边会递归的调用jQuery.extend方法去合并
                if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
                    ( copyIsArray = Array.isArray( copy ) ) ) ) {

                        // 如果当前合并元素为数组
                        if ( copyIsArray ) {
                            copyIsArray = false;
                            clone = src && Array.isArray( src ) ? src : [];
                        } else {
                            clone = src && jQuery.isPlainObject( src ) ? src : {};
                        }

                        // 不改变原来的元素，仅仅克隆它们然后合并
                        target[ name ] = jQuery.extend( deep, clone, copy );

                // 如果不是深拷贝，并且被拷贝的属性不是undefined，那就简单的将该属性添加到目标对象中
                } else if ( copy !== undefined ) {
                    target[ name ] = copy;
                }
            }
        }
    }

    // 返回最终结果
    return target;
}


// ======================= 附带要看的 ====================================
// 判断数据类型
function type(obj) {
    if ( obj == null ) {
        return obj + "";
    }
}

function isPlainObject(obj) {

}
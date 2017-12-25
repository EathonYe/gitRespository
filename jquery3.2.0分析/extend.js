/**
 * jQuery.extend只能做简单对象的合并，以及为方法添加静态属性
 * 如果有更深层次的需求，就需要自己扩展
 * 1. 只穿一个参数，添加至jQuery的命名空间
 * 2. 穿两个以及上参数，后面的对象合并至第一个对象，并返回第一个对象
 * 3. 第一个参数传true，进行深拷贝，即递归的合并对象
 * 4. 第一个参数不能穿false，因为方法中只判断了是否为boolean类型
 * 问题：
 * 1. 属性描述符不能被复制
 * 2. 只能复制可枚举属性
 * 3. 只能复制合并简单对象
 */

/**
 * $.extend() 为jQuery类添加静态属性，使用方式：$.each()
 * $.fn.extend() 为jQuery.prototype添加静态属性，即为jQuery对象添加属性，使用方式：$('#div1').each()
 */
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
    // 这边也可以是为方法添加静态属性
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
// 本质是通过Object.prototype.toString方法，但只兼容ES5及以上
function type( obj ) {
    if ( obj == null ) {
        return obj + "";
    }

    // Support: Android <=2.3 only (functionish RegExp)
    return typeof obj === "object" || typeof obj === "function" ?
        class2type[ toString.call( obj ) ] || "object" :
        typeof obj;
}

// class2type中存储了一个map，保存所有的数据类型或者说是构造函数的class名
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

// 判断是否为简单对象
function isPlainObject( obj ) {
    var proto, Ctor;
    
    // Detect obvious negatives
    // Use toString instead of jQuery.type to catch host objects
    if ( !obj || toString.call( obj ) !== "[object Object]" ) {
        return false;
    }

    proto = getProto( obj );

    // Objects with no prototype (e.g., `Object.create( null )`) are plain
    if ( !proto ) {
        return true;
    }

    // Objects with prototype are plain iff they were constructed by a global Object function
    Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
    return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
}
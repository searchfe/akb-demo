/**
 * @file sample.js
 * @author sekiyika(pengxing@baidu.com)
 */


module.exports = async (ctx) => {
    ctx.body = await ctx.render(
        'sample',
        {
            name: ctx.params.name || 'world'
        }
    );
};

export default async function (service: string, courseId: string | string[], userId: string) {
    const res = await useService('rpc').create({
        method: 'PurchaseCourse',
        data: {
            service: service,
            courseId: courseId,
            userId: userId
        }
    });
    
    if (res.data.message === 'all is okay') {
        navigateTo('/account');
    }
}
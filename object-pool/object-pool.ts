class PooledObject {

    readonly createdAt: Date = new Date()
    tempData: string = ''

    toString(): string {
        return ` Created At: ${this.createdAt.toLocaleTimeString()}:${this.createdAt.getMilliseconds()} ${this.tempData}`
    }

}
 
class Pool {
    private static available: PooledObject[] = []
    private static inUse: PooledObject[] = []
 
    public static getObject(): PooledObject {
        if (Pool.available.length != 0) {
            const pooledObject = Pool.available[0]
            Pool.inUse.push(pooledObject)
            Pool.available.shift()
            return pooledObject
        } else {
            const pooledObject = new PooledObject()
            Pool.inUse.push(pooledObject)
            return pooledObject
        }
    }
 
    public static releaseObject(pooledObject: PooledObject) {
        Pool.cleanUp(pooledObject)
        Pool.available.push(pooledObject)
        Pool.inUse.splice(Pool.inUse.indexOf(pooledObject), 1)
    }
 
    private static cleanUp(pooledObject: PooledObject) {
        pooledObject.tempData = ''
    }

    public static print() {
        console.log(`
        Pool:
          Available: ${Pool.available}
          In Use:    ${Pool.inUse}
        `)
    }

}

const onePooled = Pool.getObject()
onePooled.tempData = 'One Pooled'

setTimeout(() => {
    const twoPooled = Pool.getObject()
    twoPooled.tempData = 'Two Pooled'
    Pool.print()
    Pool.releaseObject(twoPooled)
    Pool.print()
    const anotherPooled = Pool.getObject()
    anotherPooled.tempData = 'Another Pooled'
    Pool.print()
    Pool.releaseObject(onePooled)
    Pool.releaseObject(anotherPooled)
    Pool.print()
}, 100)

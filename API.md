# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NightyNight <a name="NightyNight" id="@matthewbonig/nightynight.NightyNight"></a>

This class is deprecated, please use NightyNightForEc2.

#### Initializers <a name="Initializers" id="@matthewbonig/nightynight.NightyNight.Initializer"></a>

```typescript
import { NightyNight } from '@matthewbonig/nightynight'

new NightyNight(scope: Construct, id: string, props: NightyNightProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@matthewbonig/nightynight.NightyNight.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@matthewbonig/nightynight.NightyNight.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@matthewbonig/nightynight.NightyNight.Initializer.parameter.props">props</a></code> | <code><a href="#@matthewbonig/nightynight.NightyNightProps">NightyNightProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@matthewbonig/nightynight.NightyNight.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@matthewbonig/nightynight.NightyNight.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@matthewbonig/nightynight.NightyNight.Initializer.parameter.props"></a>

- *Type:* <a href="#@matthewbonig/nightynight.NightyNightProps">NightyNightProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@matthewbonig/nightynight.NightyNight.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### ~~`toString`~~ <a name="toString" id="@matthewbonig/nightynight.NightyNight.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@matthewbonig/nightynight.NightyNight.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@matthewbonig/nightynight.NightyNight.isConstruct"></a>

```typescript
import { NightyNight } from '@matthewbonig/nightynight'

NightyNight.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@matthewbonig/nightynight.NightyNight.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@matthewbonig/nightynight.NightyNight.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### ~~`node`~~<sup>Required</sup> <a name="node" id="@matthewbonig/nightynight.NightyNight.property.node"></a>

- *Deprecated:* in favor of NightyNightForEc2

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### NightyNightForAsg <a name="NightyNightForAsg" id="@matthewbonig/nightynight.NightyNightForAsg"></a>

A construct that will build a Lambda and a CloudWatch Rule (cron schedule) that will set the given ASG's desired capacity.

Typically used when you've got and ASG that you can scale during set hours.

#### Initializers <a name="Initializers" id="@matthewbonig/nightynight.NightyNightForAsg.Initializer"></a>

```typescript
import { NightyNightForAsg } from '@matthewbonig/nightynight'

new NightyNightForAsg(scope: Construct, id: string, props: NightyNightForAsgProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@matthewbonig/nightynight.NightyNightForAsg.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@matthewbonig/nightynight.NightyNightForAsg.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@matthewbonig/nightynight.NightyNightForAsg.Initializer.parameter.props">props</a></code> | <code><a href="#@matthewbonig/nightynight.NightyNightForAsgProps">NightyNightForAsgProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@matthewbonig/nightynight.NightyNightForAsg.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@matthewbonig/nightynight.NightyNightForAsg.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@matthewbonig/nightynight.NightyNightForAsg.Initializer.parameter.props"></a>

- *Type:* <a href="#@matthewbonig/nightynight.NightyNightForAsgProps">NightyNightForAsgProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@matthewbonig/nightynight.NightyNightForAsg.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@matthewbonig/nightynight.NightyNightForAsg.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@matthewbonig/nightynight.NightyNightForAsg.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@matthewbonig/nightynight.NightyNightForAsg.isConstruct"></a>

```typescript
import { NightyNightForAsg } from '@matthewbonig/nightynight'

NightyNightForAsg.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@matthewbonig/nightynight.NightyNightForAsg.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@matthewbonig/nightynight.NightyNightForAsg.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="@matthewbonig/nightynight.NightyNightForAsg.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### NightyNightForEc2 <a name="NightyNightForEc2" id="@matthewbonig/nightynight.NightyNightForEc2"></a>

A construct that will build a Lambda and a CloudWatch Rule (cron schedule) that will stop the given ec2 instance at the specified time.

Typically used when you've got ec2 instances that you only need during business hours
and want to reduce the costs of.

#### Initializers <a name="Initializers" id="@matthewbonig/nightynight.NightyNightForEc2.Initializer"></a>

```typescript
import { NightyNightForEc2 } from '@matthewbonig/nightynight'

new NightyNightForEc2(scope: Construct, id: string, props: NightyNightForEc2Props)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@matthewbonig/nightynight.NightyNightForEc2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@matthewbonig/nightynight.NightyNightForEc2.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@matthewbonig/nightynight.NightyNightForEc2.Initializer.parameter.props">props</a></code> | <code><a href="#@matthewbonig/nightynight.NightyNightForEc2Props">NightyNightForEc2Props</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@matthewbonig/nightynight.NightyNightForEc2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@matthewbonig/nightynight.NightyNightForEc2.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@matthewbonig/nightynight.NightyNightForEc2.Initializer.parameter.props"></a>

- *Type:* <a href="#@matthewbonig/nightynight.NightyNightForEc2Props">NightyNightForEc2Props</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@matthewbonig/nightynight.NightyNightForEc2.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@matthewbonig/nightynight.NightyNightForEc2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@matthewbonig/nightynight.NightyNightForEc2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@matthewbonig/nightynight.NightyNightForEc2.isConstruct"></a>

```typescript
import { NightyNightForEc2 } from '@matthewbonig/nightynight'

NightyNightForEc2.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@matthewbonig/nightynight.NightyNightForEc2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@matthewbonig/nightynight.NightyNightForEc2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="@matthewbonig/nightynight.NightyNightForEc2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### NightyNightForEcs <a name="NightyNightForEcs" id="@matthewbonig/nightynight.NightyNightForEcs"></a>

A construct that will build a Lambda and a CloudWatch Rule (cron schedule) that will set the given ECS Service's desired capacity.

Typically, used when you've got an ECS Service that you can scale during set hours.

#### Initializers <a name="Initializers" id="@matthewbonig/nightynight.NightyNightForEcs.Initializer"></a>

```typescript
import { NightyNightForEcs } from '@matthewbonig/nightynight'

new NightyNightForEcs(scope: Construct, id: string, props: NightyNightForEcsProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@matthewbonig/nightynight.NightyNightForEcs.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@matthewbonig/nightynight.NightyNightForEcs.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@matthewbonig/nightynight.NightyNightForEcs.Initializer.parameter.props">props</a></code> | <code><a href="#@matthewbonig/nightynight.NightyNightForEcsProps">NightyNightForEcsProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@matthewbonig/nightynight.NightyNightForEcs.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@matthewbonig/nightynight.NightyNightForEcs.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@matthewbonig/nightynight.NightyNightForEcs.Initializer.parameter.props"></a>

- *Type:* <a href="#@matthewbonig/nightynight.NightyNightForEcsProps">NightyNightForEcsProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@matthewbonig/nightynight.NightyNightForEcs.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@matthewbonig/nightynight.NightyNightForEcs.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@matthewbonig/nightynight.NightyNightForEcs.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@matthewbonig/nightynight.NightyNightForEcs.isConstruct"></a>

```typescript
import { NightyNightForEcs } from '@matthewbonig/nightynight'

NightyNightForEcs.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@matthewbonig/nightynight.NightyNightForEcs.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@matthewbonig/nightynight.NightyNightForEcs.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="@matthewbonig/nightynight.NightyNightForEcs.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### NightyNightForRds <a name="NightyNightForRds" id="@matthewbonig/nightynight.NightyNightForRds"></a>

A construct that will build a Lambda and a CloudWatch Rule (cron schedule) that will stop the given rds instance at the specified time.

Typically used when you've got rds instances that you only need during business hours
and want to reduce the costs of.

#### Initializers <a name="Initializers" id="@matthewbonig/nightynight.NightyNightForRds.Initializer"></a>

```typescript
import { NightyNightForRds } from '@matthewbonig/nightynight'

new NightyNightForRds(scope: Construct, id: string, props: NightyNightForRdsProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@matthewbonig/nightynight.NightyNightForRds.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@matthewbonig/nightynight.NightyNightForRds.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@matthewbonig/nightynight.NightyNightForRds.Initializer.parameter.props">props</a></code> | <code><a href="#@matthewbonig/nightynight.NightyNightForRdsProps">NightyNightForRdsProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@matthewbonig/nightynight.NightyNightForRds.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@matthewbonig/nightynight.NightyNightForRds.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@matthewbonig/nightynight.NightyNightForRds.Initializer.parameter.props"></a>

- *Type:* <a href="#@matthewbonig/nightynight.NightyNightForRdsProps">NightyNightForRdsProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@matthewbonig/nightynight.NightyNightForRds.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@matthewbonig/nightynight.NightyNightForRds.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@matthewbonig/nightynight.NightyNightForRds.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@matthewbonig/nightynight.NightyNightForRds.isConstruct"></a>

```typescript
import { NightyNightForRds } from '@matthewbonig/nightynight'

NightyNightForRds.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@matthewbonig/nightynight.NightyNightForRds.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@matthewbonig/nightynight.NightyNightForRds.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="@matthewbonig/nightynight.NightyNightForRds.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### WakeyWakeyForEc2 <a name="WakeyWakeyForEc2" id="@matthewbonig/nightynight.WakeyWakeyForEc2"></a>

A construct that will build a Lambda and a CloudWatch Rule (cron schedule) that will start the given ec2 instance at the specified time.

Typically used when you've got ec2 instances that you only need during business hours
and want to reduce the costs of. Use in conjunction with the Nightynight construct at

#### Initializers <a name="Initializers" id="@matthewbonig/nightynight.WakeyWakeyForEc2.Initializer"></a>

```typescript
import { WakeyWakeyForEc2 } from '@matthewbonig/nightynight'

new WakeyWakeyForEc2(scope: Construct, id: string, props: WakeyWakeyForEc2Props)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@matthewbonig/nightynight.WakeyWakeyForEc2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@matthewbonig/nightynight.WakeyWakeyForEc2.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@matthewbonig/nightynight.WakeyWakeyForEc2.Initializer.parameter.props">props</a></code> | <code><a href="#@matthewbonig/nightynight.WakeyWakeyForEc2Props">WakeyWakeyForEc2Props</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@matthewbonig/nightynight.WakeyWakeyForEc2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@matthewbonig/nightynight.WakeyWakeyForEc2.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@matthewbonig/nightynight.WakeyWakeyForEc2.Initializer.parameter.props"></a>

- *Type:* <a href="#@matthewbonig/nightynight.WakeyWakeyForEc2Props">WakeyWakeyForEc2Props</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@matthewbonig/nightynight.WakeyWakeyForEc2.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@matthewbonig/nightynight.WakeyWakeyForEc2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@matthewbonig/nightynight.WakeyWakeyForEc2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@matthewbonig/nightynight.WakeyWakeyForEc2.isConstruct"></a>

```typescript
import { WakeyWakeyForEc2 } from '@matthewbonig/nightynight'

WakeyWakeyForEc2.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@matthewbonig/nightynight.WakeyWakeyForEc2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@matthewbonig/nightynight.WakeyWakeyForEc2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="@matthewbonig/nightynight.WakeyWakeyForEc2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### WakeyWakeyForRds <a name="WakeyWakeyForRds" id="@matthewbonig/nightynight.WakeyWakeyForRds"></a>

A construct that will build a Lambda and a CloudWatch Rule (cron schedule) that will start the given rds instance at the specified time.

Typically used when you've got rds instances that you only need during business hours
and want to reduce the costs of.

#### Initializers <a name="Initializers" id="@matthewbonig/nightynight.WakeyWakeyForRds.Initializer"></a>

```typescript
import { WakeyWakeyForRds } from '@matthewbonig/nightynight'

new WakeyWakeyForRds(scope: Construct, id: string, props: WakeyWakeyForRdsProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@matthewbonig/nightynight.WakeyWakeyForRds.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@matthewbonig/nightynight.WakeyWakeyForRds.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@matthewbonig/nightynight.WakeyWakeyForRds.Initializer.parameter.props">props</a></code> | <code><a href="#@matthewbonig/nightynight.WakeyWakeyForRdsProps">WakeyWakeyForRdsProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@matthewbonig/nightynight.WakeyWakeyForRds.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@matthewbonig/nightynight.WakeyWakeyForRds.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@matthewbonig/nightynight.WakeyWakeyForRds.Initializer.parameter.props"></a>

- *Type:* <a href="#@matthewbonig/nightynight.WakeyWakeyForRdsProps">WakeyWakeyForRdsProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@matthewbonig/nightynight.WakeyWakeyForRds.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@matthewbonig/nightynight.WakeyWakeyForRds.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@matthewbonig/nightynight.WakeyWakeyForRds.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@matthewbonig/nightynight.WakeyWakeyForRds.isConstruct"></a>

```typescript
import { WakeyWakeyForRds } from '@matthewbonig/nightynight'

WakeyWakeyForRds.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@matthewbonig/nightynight.WakeyWakeyForRds.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@matthewbonig/nightynight.WakeyWakeyForRds.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="@matthewbonig/nightynight.WakeyWakeyForRds.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


## Structs <a name="Structs" id="Structs"></a>

### NightyNightForAsgProps <a name="NightyNightForAsgProps" id="@matthewbonig/nightynight.NightyNightForAsgProps"></a>

Props for the NightNight construct.

#### Initializer <a name="Initializer" id="@matthewbonig/nightynight.NightyNightForAsgProps.Initializer"></a>

```typescript
import { NightyNightForAsgProps } from '@matthewbonig/nightynight'

const nightyNightForAsgProps: NightyNightForAsgProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@matthewbonig/nightynight.NightyNightForAsgProps.property.autoScalingGroup">autoScalingGroup</a></code> | <code>aws-cdk-lib.aws_autoscaling.IAutoScalingGroup</code> | the AutoScalingGroup you'd like to change the instance count on. |
| <code><a href="#@matthewbonig/nightynight.NightyNightForAsgProps.property.desiredCapacity">desiredCapacity</a></code> | <code>number</code> | Desired capacity. |
| <code><a href="#@matthewbonig/nightynight.NightyNightForAsgProps.property.schedule">schedule</a></code> | <code>aws-cdk-lib.aws_events.CronOptions</code> | An option CronOptions to specify the time of day to scale. |

---

##### `autoScalingGroup`<sup>Required</sup> <a name="autoScalingGroup" id="@matthewbonig/nightynight.NightyNightForAsgProps.property.autoScalingGroup"></a>

```typescript
public readonly autoScalingGroup: IAutoScalingGroup;
```

- *Type:* aws-cdk-lib.aws_autoscaling.IAutoScalingGroup

the AutoScalingGroup you'd like to change the instance count on.

---

##### `desiredCapacity`<sup>Required</sup> <a name="desiredCapacity" id="@matthewbonig/nightynight.NightyNightForAsgProps.property.desiredCapacity"></a>

```typescript
public readonly desiredCapacity: number;
```

- *Type:* number

Desired capacity.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@matthewbonig/nightynight.NightyNightForAsgProps.property.schedule"></a>

```typescript
public readonly schedule: CronOptions;
```

- *Type:* aws-cdk-lib.aws_events.CronOptions
- *Default:* { day: '*', hour: '4', minute: '0' }

An option CronOptions to specify the time of day to scale.

---

### NightyNightForEc2Props <a name="NightyNightForEc2Props" id="@matthewbonig/nightynight.NightyNightForEc2Props"></a>

Props for the NightNight construct.

#### Initializer <a name="Initializer" id="@matthewbonig/nightynight.NightyNightForEc2Props.Initializer"></a>

```typescript
import { NightyNightForEc2Props } from '@matthewbonig/nightynight'

const nightyNightForEc2Props: NightyNightForEc2Props = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@matthewbonig/nightynight.NightyNightForEc2Props.property.filters">filters</a></code> | <code>any[]</code> | Filters to match to find an EC2 instance. |
| <code><a href="#@matthewbonig/nightynight.NightyNightForEc2Props.property.instanceId">instanceId</a></code> | <code>string</code> | the instanceId of the EC2 instance you'd like stopped. |
| <code><a href="#@matthewbonig/nightynight.NightyNightForEc2Props.property.schedule">schedule</a></code> | <code>aws-cdk-lib.aws_events.CronOptions</code> | An option CronOptions to specify the time of day to stop the instance. |

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@matthewbonig/nightynight.NightyNightForEc2Props.property.filters"></a>

```typescript
public readonly filters: any[];
```

- *Type:* any[]

Filters to match to find an EC2 instance.

Must provide this if instanceId is not provided. If instanceId is provided this
is ignored.

---

##### `instanceId`<sup>Optional</sup> <a name="instanceId" id="@matthewbonig/nightynight.NightyNightForEc2Props.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

the instanceId of the EC2 instance you'd like stopped.

Must provide this if tags is not provided.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@matthewbonig/nightynight.NightyNightForEc2Props.property.schedule"></a>

```typescript
public readonly schedule: CronOptions;
```

- *Type:* aws-cdk-lib.aws_events.CronOptions
- *Default:* { day: '*', hour: '4', minute: '0' }

An option CronOptions to specify the time of day to stop the instance.

---

### NightyNightForEcsProps <a name="NightyNightForEcsProps" id="@matthewbonig/nightynight.NightyNightForEcsProps"></a>

Props for the NightNight construct.

#### Initializer <a name="Initializer" id="@matthewbonig/nightynight.NightyNightForEcsProps.Initializer"></a>

```typescript
import { NightyNightForEcsProps } from '@matthewbonig/nightynight'

const nightyNightForEcsProps: NightyNightForEcsProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@matthewbonig/nightynight.NightyNightForEcsProps.property.desiredCapacity">desiredCapacity</a></code> | <code>number</code> | Desired capacity. |
| <code><a href="#@matthewbonig/nightynight.NightyNightForEcsProps.property.serviceName">serviceName</a></code> | <code>string</code> | The service name to update. |
| <code><a href="#@matthewbonig/nightynight.NightyNightForEcsProps.property.cluster">cluster</a></code> | <code>aws-cdk-lib.aws_ecs.ICluster</code> | The ECS Cluster where the service resides. |
| <code><a href="#@matthewbonig/nightynight.NightyNightForEcsProps.property.schedule">schedule</a></code> | <code>aws-cdk-lib.aws_events.CronOptions</code> | An option CronOptions to specify the time of day to scale. |

---

##### `desiredCapacity`<sup>Required</sup> <a name="desiredCapacity" id="@matthewbonig/nightynight.NightyNightForEcsProps.property.desiredCapacity"></a>

```typescript
public readonly desiredCapacity: number;
```

- *Type:* number

Desired capacity.

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@matthewbonig/nightynight.NightyNightForEcsProps.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

The service name to update.

---

##### `cluster`<sup>Optional</sup> <a name="cluster" id="@matthewbonig/nightynight.NightyNightForEcsProps.property.cluster"></a>

```typescript
public readonly cluster: ICluster;
```

- *Type:* aws-cdk-lib.aws_ecs.ICluster
- *Default:* 'default'

The ECS Cluster where the service resides.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@matthewbonig/nightynight.NightyNightForEcsProps.property.schedule"></a>

```typescript
public readonly schedule: CronOptions;
```

- *Type:* aws-cdk-lib.aws_events.CronOptions
- *Default:* { day: '*', hour: '4', minute: '0' }

An option CronOptions to specify the time of day to scale.

---

### NightyNightForRdsProps <a name="NightyNightForRdsProps" id="@matthewbonig/nightynight.NightyNightForRdsProps"></a>

Props for the NightNight construct.

#### Initializer <a name="Initializer" id="@matthewbonig/nightynight.NightyNightForRdsProps.Initializer"></a>

```typescript
import { NightyNightForRdsProps } from '@matthewbonig/nightynight'

const nightyNightForRdsProps: NightyNightForRdsProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@matthewbonig/nightynight.NightyNightForRdsProps.property.dbInstanceIdentifier">dbInstanceIdentifier</a></code> | <code>string</code> | the DBInstanceIdentifier of the RDS instance you'd like stopped. |
| <code><a href="#@matthewbonig/nightynight.NightyNightForRdsProps.property.schedule">schedule</a></code> | <code>aws-cdk-lib.aws_events.CronOptions</code> | An option CronOptions to specify the time of day to stop the instance. |

---

##### `dbInstanceIdentifier`<sup>Required</sup> <a name="dbInstanceIdentifier" id="@matthewbonig/nightynight.NightyNightForRdsProps.property.dbInstanceIdentifier"></a>

```typescript
public readonly dbInstanceIdentifier: string;
```

- *Type:* string

the DBInstanceIdentifier of the RDS instance you'd like stopped.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@matthewbonig/nightynight.NightyNightForRdsProps.property.schedule"></a>

```typescript
public readonly schedule: CronOptions;
```

- *Type:* aws-cdk-lib.aws_events.CronOptions
- *Default:* { day: '*', hour: '4', minute: '0' }

An option CronOptions to specify the time of day to stop the instance.

---

### NightyNightProps <a name="NightyNightProps" id="@matthewbonig/nightynight.NightyNightProps"></a>

#### Initializer <a name="Initializer" id="@matthewbonig/nightynight.NightyNightProps.Initializer"></a>

```typescript
import { NightyNightProps } from '@matthewbonig/nightynight'

const nightyNightProps: NightyNightProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@matthewbonig/nightynight.NightyNightProps.property.filters">filters</a></code> | <code>any[]</code> | Filters to match to find an EC2 instance. |
| <code><a href="#@matthewbonig/nightynight.NightyNightProps.property.instanceId">instanceId</a></code> | <code>string</code> | the instanceId of the EC2 instance you'd like stopped. |
| <code><a href="#@matthewbonig/nightynight.NightyNightProps.property.schedule">schedule</a></code> | <code>aws-cdk-lib.aws_events.CronOptions</code> | An option CronOptions to specify the time of day to stop the instance. |

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@matthewbonig/nightynight.NightyNightProps.property.filters"></a>

```typescript
public readonly filters: any[];
```

- *Type:* any[]

Filters to match to find an EC2 instance.

Must provide this if instanceId is not provided. If instanceId is provided this
is ignored.

---

##### `instanceId`<sup>Optional</sup> <a name="instanceId" id="@matthewbonig/nightynight.NightyNightProps.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

the instanceId of the EC2 instance you'd like stopped.

Must provide this if tags is not provided.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@matthewbonig/nightynight.NightyNightProps.property.schedule"></a>

```typescript
public readonly schedule: CronOptions;
```

- *Type:* aws-cdk-lib.aws_events.CronOptions
- *Default:* { day: '*', hour: '4', minute: '0' }

An option CronOptions to specify the time of day to stop the instance.

---

### WakeyWakeyForEc2Props <a name="WakeyWakeyForEc2Props" id="@matthewbonig/nightynight.WakeyWakeyForEc2Props"></a>

#### Initializer <a name="Initializer" id="@matthewbonig/nightynight.WakeyWakeyForEc2Props.Initializer"></a>

```typescript
import { WakeyWakeyForEc2Props } from '@matthewbonig/nightynight'

const wakeyWakeyForEc2Props: WakeyWakeyForEc2Props = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@matthewbonig/nightynight.WakeyWakeyForEc2Props.property.filters">filters</a></code> | <code>any[]</code> | Filters to match to find an EC2 instance. |
| <code><a href="#@matthewbonig/nightynight.WakeyWakeyForEc2Props.property.instanceId">instanceId</a></code> | <code>string</code> | the instanceId of the EC2 instance you'd like started. |
| <code><a href="#@matthewbonig/nightynight.WakeyWakeyForEc2Props.property.schedule">schedule</a></code> | <code>aws-cdk-lib.aws_events.CronOptions</code> | An option CronOptions to specify the time of day to start the instance. |

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@matthewbonig/nightynight.WakeyWakeyForEc2Props.property.filters"></a>

```typescript
public readonly filters: any[];
```

- *Type:* any[]

Filters to match to find an EC2 instance.

Must provide this if instanceId is not provided. If instanceId is provided this
is ignored.

---

*Example*

```typescript
[{
Name: 'STRING_VALUE',
Values: [
'STRING_VALUE',
]
}]
```


##### `instanceId`<sup>Optional</sup> <a name="instanceId" id="@matthewbonig/nightynight.WakeyWakeyForEc2Props.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

the instanceId of the EC2 instance you'd like started.

If instanceId is provided the filters is ignored.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@matthewbonig/nightynight.WakeyWakeyForEc2Props.property.schedule"></a>

```typescript
public readonly schedule: CronOptions;
```

- *Type:* aws-cdk-lib.aws_events.CronOptions
- *Default:* { day: '*', hour: '12', minute: '0' }

An option CronOptions to specify the time of day to start the instance.

---

### WakeyWakeyForRdsProps <a name="WakeyWakeyForRdsProps" id="@matthewbonig/nightynight.WakeyWakeyForRdsProps"></a>

Props for the WakeyWakeyForRds construct.

#### Initializer <a name="Initializer" id="@matthewbonig/nightynight.WakeyWakeyForRdsProps.Initializer"></a>

```typescript
import { WakeyWakeyForRdsProps } from '@matthewbonig/nightynight'

const wakeyWakeyForRdsProps: WakeyWakeyForRdsProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@matthewbonig/nightynight.WakeyWakeyForRdsProps.property.dbInstanceIdentifier">dbInstanceIdentifier</a></code> | <code>string</code> | the DBInstanceIdentifier of the RDS instance you'd like started. |
| <code><a href="#@matthewbonig/nightynight.WakeyWakeyForRdsProps.property.schedule">schedule</a></code> | <code>aws-cdk-lib.aws_events.CronOptions</code> | An option CronOptions to specify the time of day to start the instance. |

---

##### `dbInstanceIdentifier`<sup>Required</sup> <a name="dbInstanceIdentifier" id="@matthewbonig/nightynight.WakeyWakeyForRdsProps.property.dbInstanceIdentifier"></a>

```typescript
public readonly dbInstanceIdentifier: string;
```

- *Type:* string

the DBInstanceIdentifier of the RDS instance you'd like started.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@matthewbonig/nightynight.WakeyWakeyForRdsProps.property.schedule"></a>

```typescript
public readonly schedule: CronOptions;
```

- *Type:* aws-cdk-lib.aws_events.CronOptions
- *Default:* { day: '*', hour: '4', minute: '0' }

An option CronOptions to specify the time of day to start the instance.

---




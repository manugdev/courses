public class Switch {
    public static void main(String[] args){
        var estacion = "primavera";
        switch (estacion){
            case "verano":
                System.out.println("Es verano");
                break;
            case "otoño":
                System.out.println("Es otoño");
                break;
            case "invierno":
                System.out.println("Es invierno");
                break;
            case "primavera":
                System.out.println("Es primavera");
                break;
            default:
                System.out.println("No es una estacion");
        }
    }
}

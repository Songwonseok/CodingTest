class Solution {
    public String solution(String new_id) {
        new_id = new_id.toLowerCase();
        new_id = new_id.replaceAll("[^a-z0-9-_.]","");
        new_id = new_id.replaceAll("[.]+",".");
        new_id = new_id.replaceAll("^[.]|[.]$", "");
        if(new_id.length() == 0){
            new_id = "aaa";
        }else if(new_id.length() >= 16){
            if(new_id.charAt(14) == '.'){
                new_id = new_id.substring(0,14);
            }else{
                new_id = new_id.substring(0,15);
            }
        }
        while(new_id.length() <=2){
            new_id += new_id.substring(new_id.length()-1, new_id.length());
        }
        
        return new_id;
    }
}